import {Box, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import MyDropzone from './MyDropzone';
import {choiceDatas} from '../data';
import LegalizationType from '../../../../types/legalizationTypes';
import removeDuplicates from '../../../../utils/arrayUtils';
import {DocumentTypes} from '../../../../types/DocumentTypes';
import {ChoiceTypes} from '../../../../types/choiceTypes';

interface MyDocumentsProps {
    data: ChoiceTypes[];
    onChangeDocument: (documents: DocumentTypes[]) => void;

}

const MyDocuments = (props: MyDocumentsProps) => {

    const {data, onChangeDocument} = props;

    const [documents, setDocuments] = useState<DocumentTypes[]>([]);

    const handleAddDocument = (newDocument: DocumentTypes) => {

        const documentIsFind = documents.find(document => document.id === newDocument.id) as DocumentTypes;

        if (documentIsFind && documents.length !== 0) {
            setDocuments(prevState => {
                return prevState.map((document) => {

                    if (document.id === newDocument.id) {
                        document.id = newDocument.id;
                        document.fileUrl = newDocument.fileUrl;
                        document.designation = newDocument.designation;
                        document.fileName = newDocument.fileName;
                    }
                    return document;
                });
            });
        } else {
            setDocuments(prevState => ([...prevState, newDocument]));
        }
    };

    useEffect(() => {
      if(documents.length !== 0) {
          onChangeDocument(documents);
      }
    },[documents]);

    return (
        <div>
            <Typography variant="overline">
                Ajoutez les documents à légaliser
                <Box ml={"3px"} component={"span"} color={"red"}>( {documents.length}/{data?.length} documents ajoutés
                    )</Box>
            </Typography>
            <Box mt={"11px"}>
                <Grid container spacing={2}>
                    {data?.map(value => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={value.id}>
                                <MyDropzone
                                    data={value}
                                    onChange={handleAddDocument}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
}

export default MyDocuments;