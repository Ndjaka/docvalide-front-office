import { Box, Button, Hidden, Typography } from '@mui/material';
import React from 'react';


interface PaymentSummaryProps {
   commissionCosts : number;
    totalPaid : number;
    onPay?: () => void;
}
function PaymentSummary(props : PaymentSummaryProps) {
    const {commissionCosts , totalPaid, onPay} = props;

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
                    <Box sx={{
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
                    </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems:'flex-end',
                        mt:{ lg:'10px' , xs:0}
                    }}>
                        <Typography
                            sx={{ fontWeight : 'bold' }}
                            variant={"overline"}>
                            Total
                        </Typography>
                        <Typography
                            sx={{ fontWeight : 'bold' }}
                            variant={"overline"}
                            color={"red"}>{totalPaid} FCFA</Typography>
                    </Box>
                </Box>

            </Box>
            <Hidden smDown>
                <Button
                    onClick={onPay}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Payer
                </Button>
            </Hidden>
        </Box>
    );
}

export default PaymentSummary;