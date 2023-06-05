import {Box, Typography,Checkbox, Grid, Button } from '@mui/material';
import palette from '../../../theme/palette';
import React from 'react';

interface MyChoicesItemsProps {
    isSelected? : boolean ,
    designation? : string,
    price? : number,
    onChangeItem : ( ) => void
}
const MyChoicesItems = (props: MyChoicesItemsProps) => {

    const {isSelected = false, designation, price, onChangeItem} = props;

    return <Box
        onClick={onChangeItem}
        sx={{
        borderRadius: '4px',
        border: `2px solid ${isSelected ? palette?.primary?.main : palette?.secondary?.dark}`,
        paddingX: '2px',
        paddingY: '3px',
        width: '100%',
        height : '110px',
        display:'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        cursor: 'pointer'
    }} >
        <Checkbox
            color="primary"
            sx={{
                '&.MuiCheckbox-root': {
                    color: "#D5D9DC"
                },
                '&.Mui-checked': {
                    color: palette?.primary?.main,
                },
                '& .MuiSvgIcon-root': { fontSize: 18 }
            }}
            inputProps={{ 'aria-label': 'controlled' }}
            checked={isSelected}
        />
        <Typography
            ml={'10px'}
            mb={'8px'}
            variant="body2"
            color={palette?.text?.primary}
            sx={{
                lineHeight: 1.2,
                marginBottom:'5px'
            }}
        >
            {designation}
        </Typography>
        <Box sx={{
            marginTop: 'auto',
            marginBottom: 0
        }}>
            <Typography ml={'10px'} mb={'10px'} variant="body2" color={"#CC212D"} >{price} FCFA</Typography>
        </Box>
    </Box>
}

export default MyChoicesItems;