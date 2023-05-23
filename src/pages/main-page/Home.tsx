import React, {Fragment, useRef} from 'react';
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
import { stepData } from './components/data';
import MyDocuments from './components/drop-document/MyDocuments';
import { ChoiceTypes } from '../../types/choiceTypes';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);
function Home() {

    const [activeStep, setActiveStep] = React.useState({
        index: 2 ,
        choiceTitle: ChoiceEnum.Legalization
    });
    const [myDocuments, setMyDocuments] = React.useState<ChoiceTypes[]>([]);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleNext = (e : Event) => {
        // console.log(buttonRef?.current);
        // e.preventDefault();
        // e.stopPropagation();
        // buttonRef?.current?.click()

        setActiveStep(prevState => ({
            index: prevState.index + 1,
            choiceTitle: prevState.choiceTitle
        }))
    };

    const handleBack = () => {
        setActiveStep(prevState => ({
            index: prevState.index - 1,
            choiceTitle: prevState.choiceTitle
        }))
    }

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

                        <Box  sx={{
                            display: index === 0 ? 'block' : 'none',
                            height: '100%'
                        }}>
                            <Choice onClickChoice={(choiceTitle) => setActiveStep(prevState => ({
                                ...prevState,
                                index: 1,
                                choiceTitle: choiceTitle
                            }))}/>
                        </Box>

                        <Box  sx={{
                            display: index !== 0 ? 'block' : 'none',
                            overflow: 'hidden'
                        }}>
                            <LayoutStep
                                choiceLayoutName={activeStep.choiceTitle === ChoiceEnum.Legalization ? "Légalisation" : "Extrait de casier judiciaire"}
                                choiceLayoutPic={activeStep.choiceTitle === ChoiceEnum.Legalization ? legalization : extract}
                                stepData={stepData}
                                header={{
                                    start: 1,
                                    end: 4,
                                    name: "Mes informations"
                                }}
                                onBack={handleBack}
                                onNext={handleNext}
                            >
                                <Box
                                     sx={{ display: index === 1 ? 'block' : 'none'}}
                                >
                                    <MyInformations
                                        buttonRef={buttonRef}
                                        onSubmit={(values)=>console.log("Home --> ", values)}
                                    />
                                </Box>
                                <Box
                                    sx={{ display: index === 2 ? 'block' : 'none' }}>
                                    <MyChoices onChoiceSelected={(value) => setMyDocuments(prevState => [...prevState , value]) }/>
                                </Box>
                                <Box   sx={{
                                    display: index === 3 ? 'block' : 'none'
                                }}>
                                    <MyDocuments
                                        data={myDocuments}
                                        onChangeDocument={(values) => console.log("Home::MyDocuments",values)}
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