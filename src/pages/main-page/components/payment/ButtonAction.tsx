import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import palette from '../../../../theme/palette';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

interface ButtonActionProps {
    onReduce:()=>void;
    onIncrease:()=>void;
    quantity?: number;
    price?: number;

}
function ButtonAction(props: ButtonActionProps) {
    const { onReduce, onIncrease, quantity = 0 , price = 0} = props;
    return (

        <Box
            sx={{
                display:'flex' ,
                flexDirection:'column'
            }}
        >
            <Box display={"flex"}>
            <IconButton
                
                onClick={()=> quantity === 1 ? {} : onReduce() }
                size="small"
                aria-label="remove"
                color="primary"
                sx={{
                    backgroundColor : palette?.primary?.main,
                    color : palette?.secondary?.main,
                    "&.MuiButtonBase-root":{
                        borderRadius : "5px 0 0 5px",
                        height : 28,
                        "&:hover":{
                            backgroundColor : palette?.primary?.dark,
                        }
                    }
                }}

            >
                <RemoveSharpIcon />
            </IconButton>
            <Box
                sx={{
                    color: palette?.secondary?.main,
                    backgroundColor : palette?.primary?.main,
                    height: 28,
                    paddingTop:.8
                }}
            >
                {quantity}
            </Box>
            <IconButton
                onClick={onIncrease}
                size="small"
                aria-label="remove"
                color="primary"
                sx={{
                    backgroundColor : palette?.primary?.main,
                    height : 28,
                    color : palette?.secondary?.main,
                    "&.MuiButtonBase-root":{
                        borderRadius : "0 5px 5px 0",
                        "&:hover":{
                            backgroundColor : palette?.primary?.dark
                        }
                    }
                }}
            >
                <AddSharpIcon />
            </IconButton>
            </Box>
            <Typography
                variant={"overline"}
                sx={{

                    mt:'7px',
                    color:"red",
                    textAlign:"center",
                    fontWeight:"bold"
                }}
            >
                {Boolean(price) && `${price} CFA`}
            </Typography>
        </Box>
    );
}

export default ButtonAction;