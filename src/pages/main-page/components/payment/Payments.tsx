import { Grid } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import PaymentTypes from '../../../../types/PaymentTypes';
import PaymentItems from './PaymentItems';
import PaymentSummary from './PaymentSummary';
import UserPayloadTypes from '../../../../types/UserPayloadTypes';
import {
  LegalizationDocRequest,
  LegalizationRequest,
} from '../../../../types/LegalizationPayloadTypes';
import PaymentService from '../../../../api/services/PaymentService';
import PaymentParamsTypes from '../../../../types/PaymentParamsTypes';
import computePrice from '../../../../utils/extractUtils';
import useTestPayments from '../../../../hooks/useTestPayments';
import LegalizationService from '../../../../api/services/LegalizationService';
import UserService from '../../../../api/services/UserService';
import { AxiosResponse } from 'axios';
import OrderPayloadTypes from '../../../../types/OrderPayloadTypes';
import OrderEnum from '../../../../enums/OrderEnum';
import { useSnackbar } from "notistack";
import CriminalRecordPayloadTypes from "../../../../types/CriminalRecordPayloadTypes";
import CriminalRecordService from "../../../../api/services/CriminalRecordService";
import CriminalRecordEnum from "../../../../enums/CriminalRecordEnum";
import OrderTypeEnum from "../../../../enums/OrderTypeEnum";

interface PaymentsProps {
  buttonRef?: React.Ref<HTMLButtonElement>;
  isExtract?: boolean;
  payments: PaymentTypes[];
  setPayments: React.Dispatch<React.SetStateAction<PaymentTypes[]>>;
  userInfos?: UserPayloadTypes;
}

function Payments(props: PaymentsProps) {
  const { payments, setPayments, userInfos, isExtract , buttonRef} = props;

  const [isLoading, setIsLoading] = React.useState(false);
  const isTest = useTestPayments();
  const {enqueueSnackbar} = useSnackbar();


  /**
   * Reduce the quantity of the document
   */
  const onReduce = useCallback(
    (value: PaymentTypes) => {
      setPayments((prevState) => {
        return prevState.map((item) => {
          if (item.id === value.id) {
            return {
              ...item,
              quantity: (item?.quantity as number) - 1,
            };
          }
          return item;
        });
      });
    },
    [payments]
  );

  /**
   * Increase the quantity of the document
   */

  const onIncrease = useCallback(
    (value: PaymentTypes) => {
      setPayments((prevState) => {
        return prevState.map((item) => {
          if (item.id === value.id) {
            return {
              ...item,
              quantity: (item?.quantity as number) + 1,
            };
          }
          return item;
        });
      });
    },
    [payments]
  );


  /**
   *  order number
   *  @returns {string} - The order number.
   */
  const orderNumber = useMemo(() => {
    return `DOCVALIDE-${new Date().getFullYear()}-${userInfos?.firstname}-${userInfos?.lastname}`
  }, [userInfos]);


  /**
   * Calculate the total amount of the document
   * @returns {totalAmount : number , commissionCosts : number}
   *
   */
  const totalAmountOfDocument = useCallback(() => {
    const COMMISION_COSTS = [3000, 1500];

    const totalQuantity = payments.reduce(
      (acc, curr) => acc + (curr?.quantity as number),
      0
    );

    const totalDocument = payments.length;

    const totalAmount = payments.reduce(
      (acc, curr) => acc + (curr?.quantity as number) * (curr?.price as number),
      0
    );

    if (totalDocument >= 3 || totalQuantity >= 3) {
      return {
        totalAmount: totalAmount + COMMISION_COSTS[0],
        commissionCosts: COMMISION_COSTS[0],
      };
    } else {
      return {
        totalAmount: totalAmount + COMMISION_COSTS[1],
        commissionCosts: COMMISION_COSTS[1],
      };
    }
  }, [payments]);

  /**
   * Calculate the total amount of the document
   */
  const amount = useMemo(() => {
    return (isExtract as boolean)
      ? (computePrice(
        userInfos?.birth_department as string,
        userInfos?.townOfResidence as string
      ) as number)
      : totalAmountOfDocument().totalAmount as number;
  }, [payments,userInfos, isExtract]);


  const rmt = isTest ? 100 : amount;

  /**
   * Check the environment page
   * @returns {string} - The environment page.
   */
  const checkEnvPage = () => {
    const viteEnv = import.meta.env.MODE;
    const baseUrl = isTest ? 'https://test.docvalide.com/' : 'https://app.docvalide.com/';

    if (viteEnv === 'development') {
      return 'http://localhost:5173/';
    }

    return baseUrl;
  };

  const handlePay = () => {
    const VITE_MARCHAND_CODE = import.meta.env.VITE_MARCHAND_CODE as string;

    const params: PaymentParamsTypes = {
      rN: `${userInfos?.firstname || ''} ${userInfos?.lastname || ''}`,
      rT: userInfos?.phoneNumber as string,
      rE: userInfos?.email as string,
       rMt: rmt,
      rDvs: 'XAF',
      source: 'DOCVALIDE',
      endPage: `${checkEnvPage()}payment-status?status=success` ,
      notifyPage: `${checkEnvPage()}payment-status?status=notify`,
      cancelPage: `${checkEnvPage()}payment-status?status=cancel`,
      motif: userInfos?.motif as string,
      cmd: 'start',
      rH: VITE_MARCHAND_CODE,
      rI: orderNumber,
    };

    PaymentService.buy(params)
      .then((res) => {
        if (res.status === 200) {
           document.location.replace(res.config.url as string)
        }else{
          throw new Error("Failed to pay");
        }
      })
  };

  const legalizationDocs: LegalizationDocRequest[] = useMemo(() => {
    return payments.map((item) => {
      return {
        quantity: item?.quantity as number,
        fileUrl: item?.fileUrl as string,
        fileName: item?.fileName as string,
        designation: item?.designation as string,
      };
    });
  }, [payments]);

  console.log('legalizationDocs', legalizationDocs);
  const orderProcess = () => {
    setIsLoading(true);
    let userId: any;
    
    UserService.addUser(userInfos as UserPayloadTypes)
      .then((userResponse) => {
        if (userResponse.status === 201) {
           userId = userResponse?.data.data.id;

          if (!isExtract) {
            const payload: LegalizationRequest = {
              receiptMoment: userInfos?.receiptMoment as string,
              motif: userInfos?.motif as string,
              quantity: payments.reduce(
                (acc, curr) => acc + (curr?.quantity as number),
                0
              ),
              userId: userId,
              legalizationDocs,
            };

            return LegalizationService.addLegalization(payload);

          }else{

            const payload: CriminalRecordPayloadTypes = {
              birthDepartment: userInfos?.birth_department as string,
              fileUrl: {
                fileName: legalizationDocs[0].fileName,
                backUrl: legalizationDocs.find((item) => item.designation === CriminalRecordEnum.CNI_RECTO)?.fileUrl as string,
                frontUrl: legalizationDocs.find((item) => item.designation === CriminalRecordEnum.CNI_VERSO)?.fileUrl as string,
              },
              motherName: userInfos?.mother_name as string,
              userId
            }

            return CriminalRecordService.addCriminalRecord(payload);
          }

        } else {
          throw new Error("Failed to add user.");
        }
      })
      .then((response) => {
        if (response.status === 201) {

          const payload: OrderPayloadTypes = {
            orderAmount: rmt,
            orderNumber: orderNumber,
            orderStatus: OrderEnum.PENDING,
            orderType: !isExtract ? OrderTypeEnum.LEGALIZATION : OrderTypeEnum.CRIMINAL_RECORD,
            userId: userId,
          };

          return PaymentService.order(payload);
        } else {
          throw new Error("Failed to add legalization.");
        }
      })
      .then((orderResponse) => {
        if (orderResponse.status === 201) {
          handlePay();
        } else {
          throw new Error("Failed to create order.");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        enqueueSnackbar("Une erreur est survenue lors du traitement de votre demande", {
          variant: "error",
        });
      });
  };




  return (
    <Grid container spacing={1} sx={{ position: 'relative' }}>
      <Grid
        item
        xs={12}
        sm={6}
        lg={8}
        sx={{
          overflowY: { lg: 'auto', xs: 'inherit' },
          height: { lg: '380px', xs: 'inherit' },
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f2f2f2',
          },
        }}
      >
        {payments.map((value) => {
          return (
            <PaymentItems
              isExtract={isExtract as boolean}
              key={value.id}
              data={value}
              onReduce={onReduce}
              onIncrease={onIncrease}
            />
          );
        })}
      </Grid>

      <Grid item xs={12} sm={6} lg={4}>
        <PaymentSummary
          ref={buttonRef}
          isLoading={isLoading}
          onPay={orderProcess}
          isExtract={isExtract as boolean}
          totalPaid={amount}
          commissionCosts={totalAmountOfDocument().commissionCosts}
        />
      </Grid>
    </Grid>
  );
}

export default React.memo(Payments);
