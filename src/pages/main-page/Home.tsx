import React, { useCallback, useRef, useState } from 'react';
import { Box, Container } from '@mui/material';
import Choice from './components/Choice';
import LayoutStep from './components/LayoutStep';
import legalization from '../../assets/Legalisation.svg';
import extract from '../../assets/Extrait.svg';
import ReactSwipableView from 'react-swipeable-views';
import MyChoices from './components/MyChoices';
import MyDocuments from './components/drop-document/MyDocuments';
import Payments from './components/payment/Payments';
import { DocumentTypes } from '../../types/DocumentTypes';
import DocumentEnum from '../../enums/DocumentEnum';
import PaymentTypes from '../../types/PaymentTypes';
import MyInformations, { UserValues } from './components/MyInformations';
import ChoiceEnum from '../../enums/ChoiceEnum';
import UserPayloadTypes from '../../types/UserPayloadTypes';
import RolesEnum from '../../enums/RolesEnum';
import { cniData, extractData, legalizationData } from '../../data/data';
import choiceEnum from '../../enums/ChoiceEnum';
import dayjs from 'dayjs';

const stepObject = {
  legalization: legalizationData,
  extract: extractData,
};
const Home = () => {
  const [activeStep, setActiveStep] = useState({
    index: 0,
    choiceTitle: ChoiceEnum.Legalization,
  });
  const [myDocuments, setMyDocuments] = useState<DocumentTypes[]>([]);
  const [paymentsData, setPaymentsData] = useState<PaymentTypes[]>([]);
  const [steps, setSteps] = useState(stepObject[ChoiceEnum.Legalization]);
  const [userInformation, setUserInformation] = useState<UserPayloadTypes | null>();

  const buttonInformationRef = useRef<HTMLButtonElement>(null);

  const buttonPaymentRef = useRef<HTMLButtonElement>(null);

  /**
   *  Change the status of step
   *  @param step {number} - The new step to add or update.
   *  @param isCompleted {boolean} -  The new status of step.
   *  @returns {void}
   */

  const handleStepChange = useCallback(
    (step: number, isCompleted: boolean) => {
      setSteps((prevState) => {
        return prevState.map((item, index) => {
          if (index === step) {
            return { ...item, isCompleted };
          }
          return item;
        });
      });
    },
    [setSteps]
  );

  const handleNext = useCallback(() => {
    switch (activeStep.index) {
      case 1:
        {
          buttonInformationRef?.current?.click();
        }
        break;
      case 2:
        {
          if (activeStep.choiceTitle === choiceEnum.Legalization) {
            if (myDocuments.length > 0) {
              setActiveStep((prevState) => ({
                ...prevState,
                index: prevState.index + 1,
              }));
              handleStepChange(1, true);
            }
          } else {
            if (paymentsData.length === myDocuments.length) {
              setActiveStep((prevState) => ({
                ...prevState,
                index: prevState.index + 1,
              }));
              handleStepChange(1, true);
            } else {
              changeStatusOfDocumentIfIsEmpty();
            }
          }
        }
        break;
      case 3: {
        if (paymentsData.length === myDocuments.length) {
          setActiveStep((prevState) => ({
            ...prevState,
            index: prevState.index + 1,
          }));
          handleStepChange(2, true);
        } else {
          changeStatusOfDocumentIfIsEmpty();
        }
      }
    }
  }, [activeStep.index, handleStepChange, myDocuments, paymentsData, steps]);

  const handleBack = useCallback(() => {
    handleStepChange(activeStep.index - 1, false);
    setActiveStep((prevState) => ({
      ...prevState,
      index: prevState.index - 1,
    }));
  }, [activeStep.index, handleStepChange]);

  /**
   *  Change the status of step
   *  @param value {DocumentTypes} - The new document to add or update.
   *  @returns {void}
   *
   */
  const handleAddDocument = useCallback(
    (value: DocumentTypes) => {
      setMyDocuments((prevState) => {
        let choicesUpdated = [...prevState];
        const index = choicesUpdated.findIndex(
          (document) => document.id === value.id
        );

        if (value.selected) {
          if (index !== -1) {
            choicesUpdated[index] = value;
          } else {
            choicesUpdated.push(value);
          }
        } else if (index !== -1) {
          choicesUpdated.splice(index, 1);
        }

        return choicesUpdated;
      });
    },
    [setMyDocuments]
  );

  /**
   * Change the status of step
   * @param  {PaymentTypes} value - The new document to add or update.
   * @return {void}
   *
   */
  const changeStatusOfDocumentIfIsEmpty = useCallback(() => {
    setMyDocuments((prevState) => {
      return prevState.map((document) => {
        if (document.docStatus === DocumentEnum.DEFAULT) {
          return { ...document, docStatus: DocumentEnum.ERROR };
        }
        return document;
      });
    });
  }, [setMyDocuments]);

  /**
   * Handle submit information
   * @param  {UserValues} values
   * @return {void}
   */

  const handleSubmitInformation = useCallback(
    (values: UserValues) => {
      if (Object.keys(values).length > 0) {
        if (activeStep.choiceTitle === ChoiceEnum.Extract) {
          const cniToDocument = cniData.map((item) => {
            return {
              ...item,
              docStatus: DocumentEnum.DEFAULT,
              selected: true,
            };
          });

          if (paymentsData.length === 0) {
            cniToDocument.forEach((item) => {
              handleAddDocument(item);
            });
          }
        }

        setUserInformation({
          birth_date: dayjs(values.birth_date as unknown as Date).format(
            'YYYY-MM-DD'
          ),
          birth_department: values.birth_department.id as string,
          father_name: values.father_name as string,
          mother_name: values.mother_name as string,
          firstname: (values.full_name as string).split(' ')[0] || '',
          lastname: (values.full_name as string).split(' ')[1] || '',
          email: values.email as string,
          phoneNumber: values.phone as string,
          roles: RolesEnum.USER as string,
          townOfResidence: values.townOfResidence?.id as string,
          motif: values.reason as string,
          receiptMoment: values.moment as string,
        });

        setActiveStep((prevState) => ({
          ...prevState,
          index: prevState.index + 1,
        }));

        handleStepChange(0, true);
      }
    },
    [activeStep.choiceTitle, handleAddDocument, paymentsData]
  );

const initAllData = () => {
  setMyDocuments([]);
  setPaymentsData([]);
  setUserInformation(null);
  }

  return (
    <Container
      maxWidth={'md'}
      sx={{
        height: 'calc(100vh - 76px)',
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
      }}
    >
      <Box
        sx={{
          display: activeStep.index === 0 ? 'block' : 'none',
          width: '100%',
        }}
      >
        <Choice
          onClickChoice={(choiceTitle) => {
            initAllData();
            setActiveStep((prevState) => ({
              ...prevState,
              index: 1,
              choiceTitle: choiceTitle,
            }));
            setSteps(stepObject[choiceTitle]);
          }}
        />
      </Box>
      <Box
        sx={{
          display: [1, 2, 3, 4].includes(activeStep.index) ? 'block' : 'none',
          width: '100%',
        }}
      >
        <LayoutStep
          choiceLayoutName={
            activeStep.choiceTitle === ChoiceEnum.Legalization
              ? 'Légalisation'
              : 'Extrait de casier judiciaire'
          }
          choiceLayoutPic={
            activeStep.choiceTitle === ChoiceEnum.Legalization
              ? legalization
              : extract
          }
          stepData={steps}
          header={{
            name: steps[activeStep.index - 1]?.stepName,
            start: activeStep.index,
            end: steps.length,
          }}
          onBack={handleBack}
          onNext={handleNext}
          hideNext={activeStep.index !== steps.length}
        >
          <ReactSwipableView
            disabled={true}
            index={activeStep.index - 1}
            slideStyle={{
              height: '392px',
            }}
          >
            <MyInformations
              choiceType={activeStep.choiceTitle}
              ref={buttonInformationRef}
              onSubmit={handleSubmitInformation}
            />
            {activeStep.choiceTitle === choiceEnum.Legalization ? (
              <MyChoices onAddDocument={handleAddDocument} />
            ) : (
              <MyDocuments
                myDocuments={myDocuments}
                setMyDocuments={setMyDocuments}
                onChangeDocument={setPaymentsData}
              />
            )}
            {activeStep.choiceTitle === choiceEnum.Legalization ? (
              <MyDocuments
                myDocuments={myDocuments}
                setMyDocuments={setMyDocuments}
                onChangeDocument={setPaymentsData}
              />
            ) : (
              <Payments
                isExtract={activeStep.choiceTitle === choiceEnum.Extract}
                userInfos={userInformation as UserPayloadTypes}
                payments={paymentsData}
                setPayments={setPaymentsData}
                buttonRef={buttonPaymentRef}
              />
            )}
            <Payments
              buttonRef={buttonPaymentRef}
              userInfos={userInformation as UserPayloadTypes}
              payments={paymentsData}
              setPayments={setPaymentsData}
            />
          </ReactSwipableView>
        </LayoutStep>
      </Box>
    </Container>
  );
};

export default React.memo(Home);
