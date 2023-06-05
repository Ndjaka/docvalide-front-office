import React, {Fragment, useCallback, useRef} from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import Choice from './components/Choice';
import LayoutStep from './components/LayoutStep';
import MyInformations from './components/MyInformations';
import legalization from '../../assets/Legalisation.svg';
import extract from '../../assets/Extrait.svg';
import {virtualize} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import ChoiceEnum from '../../enums/choiceEnum';
import MyChoices from './components/MyChoices';
import {stepData} from './components/data';
import MyDocuments from './components/drop-document/MyDocuments';
import Payments from './components/payment/Payments';
import {DocumentTypes} from '../../types/DocumentTypes';
import DocumentEnum from '../../enums/DocumentEnum';
import PaymentTypes from '../../types/PaymentTypes';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function Home() {

    const [activeStep, setActiveStep] = React.useState({
        index: 0,
        choiceTitle: ChoiceEnum.Legalization
    });
    const [myDocuments, setMyDocuments] = React.useState<DocumentTypes[]>([]);

    const [paymentsData, setPaymentsData] = React.useState<PaymentTypes[]>([]);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleNext = () => {
        // console.log(buttonRef?.current);
        // e.preventDefault();
        // e.stopPropagation();
        // buttonRef?.current?.click()

        setActiveStep(prevState => ({
            index: prevState.index + 1,
            choiceTitle: prevState.choiceTitle
        }));

       // changeStatusOfDocumentIfIsEmpty();
    };

    const handleBack = () => {
        setActiveStep(prevState => ({
            index: prevState.index - 1,
            choiceTitle: prevState.choiceTitle
        }))
    }

    /**
     * Toggles the document item based on its selected status.
     *
     * @param {DocumentTypes} value - The document item to toggle.
     */

    const toggleDocumentItem = (value: DocumentTypes) => {
        setMyDocuments(prevState => {
            let choicesUpdated = [...prevState];
            const index = choicesUpdated.findIndex(document => document.id === value.id);

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
    };

    /**
     * Changes the status of a document if it is empty.
     *
     */
    const changeStatusOfDocumentIfIsEmpty = () => {
        setMyDocuments(prevState => {
            return prevState.map(document => {
                if(document.docStatus === DocumentEnum.DEFAULT ) {
                    return { ...document, docStatus: DocumentEnum.ERROR };
                }
                return document;
            })
        });
    };

    return (
        <Container
            maxWidth={'md'}
            sx={{
                height: 'calc(100vh - 76px)',
                display: 'flex',
                placeItems: 'center',
                placeContent: 'center'
            }}
        >
            <VirtualizeSwipeableViews
                //   disabled={true}
                index={activeStep.index}
                slideRenderer={({index, key}) => (
                    <Fragment key={key}>

                        <Box sx={{
                            display: index === 0 ? 'block' : 'none',
                            height: '100%'
                        }}>
                            <Choice onClickChoice={(choiceTitle) => setActiveStep(prevState => ({
                                ...prevState,
                                index: 1,
                                choiceTitle: choiceTitle
                            }))}/>
                        </Box>

                        <Box sx={{
                            display: index !== 0 ? 'block' : 'none',
                            overflow: 'hidden'
                        }}>
                            <LayoutStep
                                choiceLayoutName={activeStep.choiceTitle === ChoiceEnum.Legalization ? "Légalisation" : "Extrait de casier judiciaire"}
                                choiceLayoutPic={activeStep.choiceTitle === ChoiceEnum.Legalization ? legalization : extract}
                                stepData={stepData}
                                header={{
                                    name: activeStep.choiceTitle,
                                    start: 1,
                                    end: 4,

                                }}
                                onBack={handleBack}
                                onNext={handleNext}
                            >
                                <Box
                                    sx={{display: index === 1 ? 'block' : 'none'}}
                                >
                                    <MyInformations
                                        buttonRef={buttonRef}
                                        onSubmit={(values) => {
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{display: index === 2 ? 'block' : 'none'}}>
                                        <MyChoices onAddDocument={toggleDocumentItem}/>
                                </Box>
                                <Box sx={{
                                    display: index === 3 ? 'block' : 'none'
                                }}>
                                    <MyDocuments
                                        myDocuments={myDocuments}
                                        setMyDocuments={setMyDocuments}
                                        onChangeDocument={setPaymentsData}
                                    />
                                </Box>
                                <Box sx={{
                                    display: index === 4 ? 'block' : 'none',
                                    marginTop : "20px"
                                }}>
                                    <Payments
                                        payments={paymentsData}
                                        setPayments={setPaymentsData}
                                    />
                                </Box>
                            </LayoutStep>
                        </Box>
                    </Fragment>
                )}
            />
        </Container>
    );
}

export default Home;