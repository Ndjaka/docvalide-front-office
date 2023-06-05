import {Box, Grid, Typography} from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';
import MyDropzone from './MyDropzone';
import {choiceDatas} from '../data';
import LegalizationType from '../../../../types/legalizationTypes';
import removeDuplicates from '../../../../utils/arrayUtils';
import {DocumentTypes} from '../../../../types/DocumentTypes';
import DocumentEnum from '../../../../enums/DocumentEnum';
import PaymentTypes from '../../../../types/PaymentTypes';


interface MyDocumentsProps {
    myDocuments: DocumentTypes[];
    setMyDocuments : (doc: DocumentTypes[]) => void
    onChangeDocument: (documents: PaymentTypes[]) => void;

}

const MyDocuments = (props: MyDocumentsProps) => {

    const {myDocuments, onChangeDocument , setMyDocuments} = props;

    const [documents, setDocuments] = useState<DocumentTypes[]>([]);


    /**
     * Adds a new document to the document list or updates an existing document.
     *
     * @param {DocumentTypes} newDocument - The new document to add or update.
     * @returns {void}
     */
    const handleAddDocument = useCallback((newDocument: DocumentTypes) => {

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

    },[documents]);

    /**
     * Changes the status of a document to DocumentEnum.SUCCESS.
     *
     * @param {DocumentTypes} doc - The document to update the status of.
     * @returns {void}
     */
    const handleChangeStatusOfDocument = useCallback((doc: DocumentTypes) => {

        const updatedDocuments = myDocuments.map(value => {
            if (value.id === doc.id) {
                return { ...value, docStatus: DocumentEnum.SUCCESS };
            }
            return value;
        });

        setMyDocuments(updatedDocuments);

    },[myDocuments]);


    useEffect(() => {
      if(documents.length !== 0) {
          console.log({documents})
          const docucmentToPayments :PaymentTypes[] =  documents.map((value) => ({
              quantity : 1,
              price : value.price,
              fileUrl : value.fileUrl,
              fileName : value.fileName,
              designation: value.designation,
              id : value.id
          }));
          onChangeDocument(docucmentToPayments);
      }
    },[documents, onChangeDocument]);

    console.log({documents});
    return (
        <div>
            <Typography variant="overline">
                Ajoutez les documents à légaliser
                <Box ml={"3px"} component={"span"} color={"red"}>( {documents.length}/{myDocuments.length} documents ajoutés)</Box>
            </Typography>
            <Box mt={"11px"}>
                <Grid container spacing={2}>
                    {myDocuments.map(value => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={6} key={value.id}>
                                <MyDropzone
                                    data={value}
                                    onChange={(document)=> {
                                        handleAddDocument(document);
                                        handleChangeStatusOfDocument(document);
                                    }}
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