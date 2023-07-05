import { Grid } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import PaymentTypes from '../../../../types/PaymentTypes';
import PaymentItems from './PaymentItems';
import PaymentSummary from './PaymentSummary';
import UserPayloadTypes from '../../../../types/UserPayloadTypes';
import { LegalizationDocRequest } from '../../../../types/LegalizationPayloadTypes';
import PaymentService from '../../../../api/services/PaymentService';
import PaymentParamsTypes from '../../../../types/PaymentParamsTypes';
import computePrice from '../../../../utils/extractUtils';

interface PaymentsProps {
  isExtract?: boolean;
  payments: PaymentTypes[];
  setPayments: React.Dispatch<React.SetStateAction<PaymentTypes[]>>;
  userInfos?: UserPayloadTypes;
}

function Payments(props: PaymentsProps) {
  const { payments, setPayments, userInfos, isExtract } = props;

  console.log({ userInfos });

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

  /**
   * Handles the payment of the documents
   */

  const handlePay = () => {
    const VITE_MARCHAND_CODE = import.meta.env.VITE_MARCHAND_CODE as string;

    const params: PaymentParamsTypes = {
      rN: `${userInfos?.firstname || ''} ${userInfos?.lastname || ''}`,
      rT: userInfos?.phoneNumber as string,
      rE: userInfos?.email as string,
      rMt: totalAmountOfDocument().totalAmount as number,
      rDvs: 'XAF',
      source: 'GHOSTTECH',
      endPage: 'http://localhost:5173/',
      notifyPage: 'http://localhost:5173/',
      cancelPage: 'http://localhost:5173/',
      motif: userInfos?.motif as string,
      cmd: 'start',
      rH: VITE_MARCHAND_CODE,
    };

    PaymentService.buy(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(
    'computePrice',
    computePrice(
      userInfos?.birth_department as string,
      userInfos?.townOfResidence as string
    )
  );
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
          onPay={handlePay}
          isExtract={isExtract as boolean}
          totalPaid={
            (isExtract as boolean)
              ? (computePrice(
                  userInfos?.birth_department as string,
                  userInfos?.townOfResidence as string
                ) as number)
              : totalAmountOfDocument().totalAmount
          }
          commissionCosts={totalAmountOfDocument().commissionCosts}
        />
      </Grid>
    </Grid>
  );
}

export default React.memo(Payments);
