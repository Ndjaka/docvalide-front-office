import {Box, Typography, Grid } from '@mui/material';
import React, {useCallback} from 'react';
import { choiceDatas } from '../../../data/data';
import MyChoicesItems from './MyChoiceItems';
import { DocumentTypes } from '../../../types/DocumentTypes';
import { ChoiceTypes } from '../../../types/ChoiceTypes';
import DocumentEnum from '../../../enums/DocumentEnum';

interface MyChoicesProps {
    onAddDocument: (value:DocumentTypes) => void;


}
function MyChoices(props:MyChoicesProps) {
    const {onAddDocument} = props;
    const [choices, setChoices] = React.useState<ChoiceTypes[]>(choiceDatas);


    /**
     * Handles changes to a choice item.
     * @param {ChoiceTypes} value - The choice item to be updated.
     */
    const handleChangeItem = useCallback((value: ChoiceTypes) => {
        setChoices(prevState => {
            const updatedChoices = [...prevState];
            const index = updatedChoices.findIndex(choice => choice.id === value.id);

            if (index !== -1) {
                updatedChoices[index] = {
                    ...updatedChoices[index],
                    selected: !value.selected
                };

                onAddDocument({
                    ...updatedChoices[index],
                    docStatus: DocumentEnum.DEFAULT
                } as DocumentTypes);
            }

            return updatedChoices;
        });
    }, [onAddDocument]);


    return (
        <Box >
            <Typography variant="overline" >Sélectionner les documents à légaliser</Typography>
            <Grid container
                  spacing={2}
            >
                {
                    choices.map((value) => (
                        <Grid item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={4}
                              key={value.id} >
                            <MyChoicesItems
                                onChangeItem={() => handleChangeItem(value)}
                                designation={value?.designation}
                                isSelected={value?.selected}
                                price={value?.price}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}


export default MyChoices;