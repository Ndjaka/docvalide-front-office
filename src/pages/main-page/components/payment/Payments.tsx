import {Box, Button, Grid, Hidden, IconButton, Typography } from '@mui/material';
import React, {Fragment} from 'react';
import palette from '../../../../theme/palette';
import PictureAsPdfSharpIcon from '@mui/icons-material/PictureAsPdfSharp';
import ButtonAction from './ButtonAction';
import { DocumentTypes } from '../../../../types/DocumentTypes';

interface PaymentsProps{
    documents : DocumentTypes[];
}
function Payments() {
    return (
        <Grid container
              spacing={1}
              sx={{ position:'relative' }}
        >
            <Grid item
                  xs={12}
                  sm={6}
                  lg={8}
                  sx={{
                      overflowY:{lg: "auto",xs:"inherit"},
                      height: {lg: "380px",xs:"inherit"},
                      '&::-webkit-scrollbar': {
                          width: '8px'
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: '#888',
                          borderRadius: '5px',
                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: '#f2f2f2',
                      }

                  }}
            >
            {
                Array.from({length: 10}, (_, i) => i + 1)
                    .map(value => {
                    return <Fragment>
                        <Box sx={{
                            width: '100%',
                            border: '1px solid #D5D9DC',
                            py: '13px',
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
                                        Attestation de reuissite du baccalaureat
                                    </Typography>
                                </Box>
                                <ButtonAction
                                    onReduce={() => {
                                    }}
                                    onIncrease={() => {
                                    }}
                                    quantity={1}
                                />
                            </Box>
                        </Box>
                    </Fragment>
                })

            }
        </Grid>

            <Grid item
                  xs={12}
                  sm={6}
                  lg={4}
            >
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
                            >3000 FCFA</Typography>
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
                                color={"red"}>3000 FCFA</Typography>
                        </Box>
                    </Box>

                </Box>
                <Hidden smDown>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Payer
                </Button>
                </Hidden>
            </Grid>

        </Grid>
    );
}

export default Payments;