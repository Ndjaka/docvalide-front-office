import { Box, Button, Hidden, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React from 'react';


interface PaymentSummaryProps {
    isExtract? : boolean;
   commissionCosts : number;
    totalPaid : number;
    onPay?: () => void;
    isLoading?: boolean;
}
function PaymentSummary(props : PaymentSummaryProps) {
    const {commissionCosts , totalPaid, onPay, isLoading, isExtract} = props;

    return (
        <Box>
            <Box sx={{
                width : '100%',
                border : '1px solid #D5D9DC',
                pt: '13px',
                paddingX: '5px',
                display: 'flex',
                flexDirection: 'column',
                height: {lg:'124px', xs:'66px'},
                pb: '3px',
                mb: '10px'

            }}>
                <Typography
                    variant={"overline"}
                    textAlign="end"
                    sx={{
                        fontWeight : 'bold'
                    }}
                >
                    Recaputilatif de paiement
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {lg:'column' , xs:'row'},
                    justifyContent: { lg:'flex-end' , xs:'space-between'},
                    mb:0,
                    mt:'auto'

                }}>
                    {!isExtract && <Box sx={{
                        display:'flex',
                        flexDirection:  'column',
                        alignItems:'flex-end'
                    }}>
                        <Typography
                            sx={{ fontWeight : 'bold' }}
                            variant={"overline"}>
                            Frais de commission
                        </Typography>
                        <Typography
                            variant={"overline"}
                            color={"red"}
                            sx={{
                                fontWeight : 'bold'
                            }}
                        >{commissionCosts} FCFA</Typography>
                    </Box>}

                    <Box sx={{
                        display:'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography
                            sx={{ fontWeight : 'bold' }}
                            variant={"overline"}>
                            Total
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '11px',
                                fontWeight : 'bold'
                        }}
                            variant={"overline"}
                            color={"red"}>{totalPaid} FCFA</Typography>
                    </Box>
                </Box>

            </Box>
            <Hidden smDown>
                <LoadingButton
                    loading={isLoading}
                    onClick={onPay}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Payer
                </LoadingButton>
            </Hidden>
        </Box>
    );
}

export default PaymentSummary;