import React, { useCallback, useRef, useState } from 'react';
import { Box, Container } from '@mui/material';
import Choice from './components/Choice';
import LayoutStep from './components/LayoutStep';
import legalization from '../../assets/Legalisation.svg';
import extract from '../../assets/Extrait.svg';
import ReactSwipableView from 'react-swipeable-views';
import MyChoices from './components/MyChoices';
import { stepData } from './components/data';
import MyDocuments from './components/drop-document/MyDocuments';
import Payments from './components/payment/Payments';
import { DocumentTypes } from '../../types/DocumentTypes';
import DocumentEnum from '../../enums/DocumentEnum';
import PaymentTypes from '../../types/PaymentTypes';
import MyInformations, { UserValues } from "./components/MyInformations";
import ChoiceEnum from '../../enums/ChoiceEnum';
import UserPayloadTypes from "../../types/UserPayloadTypes";
import RolesEnum from "../../enums/RolesEnum";

const Home = () => {
  const [activeStep, setActiveStep] = useState({ index: 0, choiceTitle: ChoiceEnum.Legalization });
  const [myDocuments, setMyDocuments] = useState<DocumentTypes[]>([]);
  const [paymentsData, setPaymentsData] = useState<PaymentTypes[]>([]);
  const [steps, setSteps] = useState(stepData);
  const [userInformation, setUserInformation] = useState<UserPayloadTypes>();

  const buttonInformationRef = useRef<HTMLButtonElement>(null);

  const handleNext = () => {
     switch (activeStep.index) {
       case 1: {
         buttonInformationRef?.current?.click();
       }
       break;
       case 2: {
          if (myDocuments.length > 0) {
            setActiveStep((prevState) => ({
              ...prevState,
              index: 3,
            }));
            handleStepChange(1, true);
          }
        }
        break;
      case 3: {
        if (paymentsData.length === myDocuments.length) {
          setActiveStep((prevState) => ({
            ...prevState,
            index: 4,
          }));
          handleStepChange(2, true);
        }else {
          changeStatusOfDocumentIfIsEmpty();
        }
      }
     }
  };

  const handleBack = () => {
    handleStepChange(activeStep.index - 1, false);
    setActiveStep((prevState) => ({
      ...prevState,
      index: prevState.index - 1
    }));
  };

  const handleAddDocument = useCallback((value: DocumentTypes) => {
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
  }, []);

  const changeStatusOfDocumentIfIsEmpty = () => {
    setMyDocuments((prevState) => {
      return prevState.map((document) => {
        if (document.docStatus === DocumentEnum.DEFAULT) {
          return { ...document, docStatus: DocumentEnum.ERROR };
        }
        return document;
      });
    });
  };

  const handleStepChange = useCallback((step: number, isCompleted: boolean) => {
    setSteps((prevState) => {
      return prevState.map((item, index) => {
        if (index === step) {
          return { ...item, isCompleted };
        }
        return item;
      });
    });
  }, []);



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
          height: '100%',
          width: '100%'
        }}
      >
        <Choice
          onClickChoice={(choiceTitle) => {
            setActiveStep((prevState) => ({
              ...prevState,
              index: 1,
              choiceTitle: choiceTitle,
            }));
          }
          }
        />
      </Box>
    <Box
      sx={{
        display: [1,2,3,4].includes(activeStep.index)  ? 'block' : 'none'
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
          start: activeStep.index ,
          end: 4,
        }}
        onBack={handleBack}
        onNext={handleNext}
      >
        <ReactSwipableView
          disabled={true}
          index={activeStep.index - 1}
          containerStyle={{
            height: '392px'
        }}
        >
          <MyInformations
            ref={buttonInformationRef}
            onSubmit={(values : UserValues) => {
              if (Object.keys(values).length > 0) {
                setUserInformation({
                    firstname : values.full_name.split(' ')[0],
                    lastname : values.full_name.split(' ')[1],
                    email : values.email,
                    phoneNumber : values.phone,
                    roles : RolesEnum.USER,
                    townOfResidence : values.town,
                    motif: values.reason,
                    receiptMoment : values.moment
                });
                setActiveStep((prevState) => ({
                  ...prevState,
                  index: prevState.index + 1,
                }));
                handleStepChange(0, true);
              }
            }}
          />
          <MyChoices
            onAddDocument={handleAddDocument}
          />
          <MyDocuments
            myDocuments={myDocuments}
            setMyDocuments={setMyDocuments}
            onChangeDocument={setPaymentsData}
          />
          <Payments
            userInfos={userInformation}
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
