import {Box, Typography,Checkbox, Grid, Button } from '@mui/material';
import palette from '../../../theme/palette';
import React from 'react';

interface MyChoicesItemsProps {
    isSelected : boolean ,
    label : string,
    price : string,
    onChangeItem : ( event: React.ChangeEvent<HTMLInputElement>) => void
}
const MyChoicesItems = (props: MyChoicesItemsProps) => {

    const {isSelected = false, label, price, onChangeItem} = props;

    return <Box sx={{
        borderRadius: '4px',
        border: `2px solid ${isSelected ? palette?.primary?.main : palette?.secondary?.dark}`,
        paddingX: '2px',
        paddingY: '3px',
        width: '100%',
        height : '110px',
        display:'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
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
            onChange={onChangeItem}
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
            {label}
        </Typography>
        <Box sx={{
            marginTop: 'auto',
            marginBottom: 0
        }}>
            <Typography ml={'10px'} mb={'10px'} variant="body2" color={"#CC212D"} >{price}</Typography>
        </Box>
    </Box>
}

export default MyChoicesItems;