import {Box, Grid, Hidden, Typography } from '@mui/material';
import React from 'react';
import palette from '../../../../theme/palette';
import PictureAsPdfSharpIcon from '@mui/icons-material/PictureAsPdfSharp'
import PaymentTypes from '../../../../types/PaymentTypes';
import ButtonAction from './ButtonAction';

interface PaymentItemsProps {
    data : PaymentTypes;
    onReduce : (value: PaymentTypes) => void;
    onIncrease : (value: PaymentTypes) => void;
}
function PaymentItems(props : PaymentItemsProps) {
    const {data,onReduce,onIncrease } = props;
    return (
          <Box sx={{
                                width: '100%',
                                border: '1px solid #D5D9DC',
                                py: '7px',
                                px: '5px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <PictureAsPdfSharpIcon
                                            sx={{
                                                fontSize: '30px',
                                                color: palette?.primary?.main
                                            }}
                                        />
                                        <Typography
                                            ml={"6px"}
                                            variant={"overline"}
                                        >
                                            {data.designation}
                                        </Typography>
                                    </Box>
                                    <ButtonAction
                                        price={(data?.price as number) * (data?.quantity as number)}
                                        onReduce={() =>onReduce(data)}
                                        onIncrease={() => onIncrease(data)}
                                        quantity={data?.quantity}
                                    />
                                </Box>
                            </Box>
    );
}

export default PaymentItems;