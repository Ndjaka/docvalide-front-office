import { Box, Typography } from '@mui/material';
import React from 'react';
import palette from '../../../theme/palette';

interface stepHeaderProps {
    start: number;
    end: number;
    title: string;
}
function StepHeader(props: stepHeaderProps) {
    const { start = 0 , end = 4, title } = props;
    return (
        <Box >
            <Typography mt={"35px"} color={"#646464"} variant={"body2"}>Etape {start} sur {end}</Typography>
            <Typography mt={"10px"} variant={"h4"}>{title}</Typography>

        </Box>
    );
}

export default StepHeader;