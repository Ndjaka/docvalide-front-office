import {Box, Button, Grid, Hidden, IconButton, Typography } from '@mui/material';
import React, {Fragment, useCallback} from 'react';
import palette from '../../../../theme/palette';
import PictureAsPdfSharpIcon from '@mui/icons-material/PictureAsPdfSharp';
import ButtonAction from './ButtonAction';
import { DocumentTypes } from '../../../../types/DocumentTypes';
import PaymentTypes from '../../../../types/PaymentTypes';
import PaymentItems from './PaymentItems';
import PaymentSummary from './PaymentSummary';

interface PaymentsProps{
    payments : PaymentTypes[];
    setPayments : React.Dispatch<React.SetStateAction<PaymentTypes[]>>;

}
function Payments(props:PaymentsProps) {
    const {payments , setPayments} = props;

    /**
     * Reduce the quantity of the document
     */
    const onReduce = useCallback((value: PaymentTypes) => {
            setPayments(prevState => {
                return prevState.map(item => {
                    if (item.id === value.id) {
                        return {
                            ...item,
                            quantity: (item?.quantity as number - 1)
                        }
                    }
                    return item;
                })
            });

     },[payments]);

    /**
     * Increase the quantity of the document
     */

    const onIncrease = useCallback((value: PaymentTypes) => {


             setPayments(prevState => {
                 return prevState.map(item => {
                     if (item.id === value.id) {
                         return {
                             ...item,
                             quantity: (item?.quantity as number + 1)
                         }
                     }
                     return item;
                 })
             });
         
     },[payments]);

    /**
     * Calculate the total amount of the document
     * @returns {totalAmount : number , commissionCosts : number}
     *
     */
    const totalAmountOfDocument = () => {

         const COMMISION_COSTS = [3000 , 1500];

         const totalQuantity = payments.reduce((acc,curr) =>  acc + (curr?.quantity as number),0);

         const totalDocument = payments.length;

         const totalAmount = payments.reduce((acc,curr) => acc + (curr?.quantity as number) * (curr?.price as number),0);

         if(totalDocument >= 3 || totalQuantity >= 3){
                return {
                    totalAmount : totalAmount + COMMISION_COSTS[0],
                    commissionCosts : COMMISION_COSTS[0]
                };
         }else{
                return  {
                    totalAmount : totalAmount + COMMISION_COSTS[1],
                    commissionCosts : COMMISION_COSTS[1]
                };
         }
     }
     
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
                payments.map(value => {
                    return <PaymentItems
                        key={value.id}
                        data={value}
                        onReduce={onReduce}
                        onIncrease={onIncrease}
                    />
                })

            }
        </Grid>

            <Grid item
                  xs={12}
                  sm={6}
                  lg={4}
            >
              <PaymentSummary
                  commissionCosts={totalAmountOfDocument().commissionCosts}
                  totalPaid={totalAmountOfDocument().totalAmount}
              />
            </Grid>

        </Grid>
    );
}

export default Payments;