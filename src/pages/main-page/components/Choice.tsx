import React from 'react';
import {Box, Container, Typography,Grid } from '@mui/material';
import extract from '../../../assets/Extrait.svg';
import legalization from '../../../assets/Legalisation.svg';
import ChoiceEnum from '../../../enums/choiceEnum';


interface choiceProps {
    onClickChoice: (choiceTitle : ChoiceEnum) => void;
}


function Choice(props : choiceProps) {

    return (
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    height:'100%',
                }}
            >
                <Typography
                    sx={{
                        textAlign:'center',
                        mb :{lg:'55px',xs:'15px'},
                        typography: { lg: 'h4', xs: 'h6' }
                    }}
                >
                    Que voulez-vous réaliser ?
                </Typography>
                <Grid container spacing={2}>
                    {
                        [
                            {
                                img : legalization,
                                text : 'Légalisation',
                                onClick: () => props.onClickChoice(ChoiceEnum.Legalization)
                            },
                            {
                                img : extract,
                                text : 'Extrait de Casier judiciaire',
                                onClick: () => props.onClickChoice(ChoiceEnum.Extract)
                            }
                        ].map((item,index) =>
                            <Grid item lg={6} md={6} sm={6} xs={12} key={`${item.text}_${index}`}>
                            <Box
                                onClick={item.onClick}
                                sx={{
                                    width: '100%',
                                    border: ' 3px solid #CCCCCC',
                                    display:'flex',
                                    placeItems : 'center',
                                    placeContent:'center',
                                    flexDirection:'column',
                                    cursor:'pointer',
                                    '&:hover':{
                                        background: '#F6FBFF',
                                        border: '3px solid #4778E5',
                                        color: '#4778E5 !important'
                                    },
                                    mt:{
                                        xs:  '13px'
                                    },
                                    height: {
                                        lg: '336px' ,
                                        xs:'215px'
                                    }
                                }}>
                                <img
                                    src={item.img}
                                    width={'156px'}
                                    height={'135px'}
                                />
                                <Typography
                                    textAlign={'center'}
                                    variant={'body1'}
                                    mt={'13px'}>
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grid>)
                    }
                </Grid>
            </Box>
    );
}

export default Choice;