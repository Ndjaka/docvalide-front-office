import { Box,Typography } from '@mui/material';
import React , {useState} from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import palette from '../../../../theme/palette';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { ChoiceTypes } from '../../../../types/choiceTypes';
import fileToBase64 from '../../../../utils/fileUtils';
import LegalizationType from '../../../../types/legalizationTypes';
import { DocumentTypes } from '../../../../types/DocumentTypes';

const dropStatus = {
    "success" : "green",
    "error" : "red",
    "default" : `${palette?.primary?.main}`
};

interface MyDropzoneProps {
    data : ChoiceTypes;
    onChange : (document : DocumentTypes) => void;
    isAllSelected?: boolean;
}

function MyDropzone(props : MyDropzoneProps ) {

    const [color, setColor] = useState<string>(dropStatus["default"]);

    const { data , onChange , isAllSelected = false } = props;
    const addLegalization = async (file : File) => {

        onChange(
            {
                fileName: file.name,
                fileUrl:  await fileToBase64(file),
                designation : data.label,
                id: data.id
            }
        );
        
        setColor(dropStatus["success"]);
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
                            }}
                        >
                            {data.label}
                        </Typography>
                        {/*<Typography my={'2px'} variant={"overline"} color={dropStatus()}>Vous pouvez glisser et déposer votre document ou cliquer pour sélectionner un fichier.</Typography>*/}
                        {/*<Typography variant={"overline"} color={dropStatus()}>( Seuls les fichiers au format PDF sont acceptés. )</Typography>*/}

                    </Box>
                </Box>
            )}

    </Dropzone>

    );
}

export default MyDropzone;