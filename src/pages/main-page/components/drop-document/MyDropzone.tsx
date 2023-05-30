import { Box,Typography } from '@mui/material';
import React , {useState} from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import palette from '../../../../theme/palette';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LegalizationType from '../../../../types/legalizationTypes';
import { DocumentTypes } from '../../../../types/DocumentTypes';
import DocumentEnum from '../../../../enums/DocumentEnum';
import fileToBase64 from '../../../../utils/fileUtils';

const dropStatus = {
    "success" : "green",
    "error" : "red",
    "default" : `${palette?.primary?.main}`
};

interface MyDropzoneProps {
    data : DocumentTypes;
    onChange : (document : DocumentTypes) => void;
    isAllSelected?: boolean;
}

function MyDropzone(props : MyDropzoneProps ) {

    const { data , onChange , isAllSelected = false } = props;

    const color = dropStatus[data.docStatus as DocumentEnum];
    const addLegalization = async (file : File) => {

        onChange(
            {
                fileUrl:  await fileToBase64(file),
                designation : data.designation,
                fileName: file.name,
                price: data.price,
                id: data.id
            }
        );
    };
 
    return (
        <Dropzone
            maxFiles={1}
            multiple={false}
            onDrop={(acceptedFiles) => addLegalization(acceptedFiles[0])}
            accept={{ "application/pdf": ['.pdf'] }}
        >
            {({getRootProps, getInputProps}) => (
                <Box {...getRootProps({className: 'dropzone'})}
                     component={"div"}
                     sx={{
                         width:'100%',
                         height:'137px',
                         display: 'flex',
                         placeItems: 'center',
                         placeContent: 'center',
                         border:`3px dashed ${color}`,
                         background: 'rgba(71, 120, 229, 0.07)'
                     }}>
                    <input {...getInputProps()} />
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        placeItems: 'center',
                        placeContent: 'center',
                        px: '3px'
                    }}>
                        <FileUploadOutlinedIcon
                            sx={{
                                fontSize: 40,
                                color : color,
                                mb: '10px'
                            }}/>
                        <Typography
                            variant={"body2"}
                            color={color}
                            sx={{
                                textAlign:'center',
                                lineHeight: 1.5,
                                fontWeight: 'bold',
                            }}
                        >
                            {data.designation}
                        </Typography>
                        <Typography
                            textAlign={"center"}
                            my={'9px'}
                            variant={"caption"}
                            color={color}
                        >
                            Cliquez pour ajouter votre document.
                        </Typography>

                    </Box>
                </Box>
            )}

    </Dropzone>

    );
}

export default MyDropzone;