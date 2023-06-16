import { Box, Typography } from '@mui/material';
import React from 'react';
import palette from '../../../theme/palette';

interface StepsProps {
   stepName: string;
   isLastItem: boolean;
   isCompleted: boolean;
}
function Steps(props: StepsProps) {
    const { stepName, isLastItem, isCompleted } = props;

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isCompleted ? 'secondary.main' : "rgba(255, 255, 255, 0.5)",
                        width: '20px',
                        height:'20px',

                    }}
                >
                    {<Box
                        sx={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: isCompleted ? 'secondary.main' : `${palette?.primary?.main}`,
                            border: `3.5px solid ${palette?.primary?.main}`
                        }}/>}
                </Box>

                <Typography
                    variant={"body1"}
                    color={isCompleted ? "secondary.main" : "#ffffff7a"}
                    marginLeft={"10px"}
                >{stepName}
                </Typography>
            </Box>
            <Box display={isLastItem ? 'none':'block'}>
            <Box sx={{
                marginTop: '9px',
                width: '4px',
                height: '9px',
                backgroundColor: isCompleted ? 'secondary.main' : "rgba(255, 255, 255, 0.5)",
                marginLeft: '8px'
            }}/>
            <Box sx={{
                marginTop: '9px',
                marginBottom: '9px',
                width: '4px',
                height: '9px',
                backgroundColor: isCompleted ? 'secondary.main' : "rgba(255, 255, 255, 0.5)",
                marginLeft: '8px'
            }}/>
            </Box>

        </Box>
    );
}

export default React.memo(Steps);