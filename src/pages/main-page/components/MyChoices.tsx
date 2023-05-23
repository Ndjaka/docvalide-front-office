import {Box, Typography,Checkbox, Grid, Button } from '@mui/material';
import React from 'react';
import palette from '../../../theme/palette';
import { choiceDatas } from './data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MyChoicesItems from './MyChoiceItems';
import { ChoiceTypes } from '../../../types/choiceTypes';

interface MyChoicesProps {
    onChoiceSelected: (value:ChoiceTypes) => void;

}
function MyChoices(props:MyChoicesProps) {
    const {onChoiceSelected} = props;
    const [choices, setChoices] = React.useState<ChoiceTypes[]>(choiceDatas);

    /**
     * Handles changes to a choice item.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event object generated when the input element is changed.
     * @param {ChoiceTypes} value - The choice item to be updated.
     */
    const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>, value: ChoiceTypes) => {
        setChoices(prevState => {
            return prevState.map(choice => {
                if (choice.id === value.id) {
                    choice.selected = event.target.checked;
                    onChoiceSelected(choice);
                }
                return choice;
            });
        });
    };

    return (
        <Box >
            <Typography variant="overline" >Sélectionner les documents à légaliser</Typography>
            <Grid container
                  spacing={2}
            >
                {
                    choices.map((value) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={value.id}>
                            <MyChoicesItems
                                isSelected={value.selected}
                                label={value.label}
                                price={value.price}
                                onChangeItem={(e) => handleChangeItem(e, value)}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}


export default MyChoices;