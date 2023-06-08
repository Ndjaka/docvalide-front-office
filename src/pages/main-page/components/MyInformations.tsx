import {Box, Button} from '@mui/material';
import {FormikValues} from 'formik';
import React, {forwardRef, useRef, useState} from 'react';
import * as Yup from 'yup';
import {FieldProps} from '../../../components';
import FormBuilder from '../../../components/FormBuilder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface MyInformationsProps {
    onSubmit: (values:any) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}


const MyInformations = forwardRef<HTMLButtonElement, MyInformationsProps>((props,ref) => {

    const fields: FieldProps[] = [
        {
            label: 'Nom et Prénom',
            name: 'full_name',
            type: 'text',
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            }
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            }
        },
        {
            label: 'Numéro de Téléphone',
            name: 'phone',
            type: 'phone',
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            }
        },
        {
            label: 'Ville de résidence',
            name: 'town',
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            }
        },
        {
            label: 'Motif',
            name: 'reason',
            type: 'select',
            SelectItems: {
                menuItemProps: [
                    {
                        label: 'Concours',
                        value: 'competition'
                    },
                    {
                        label: 'Recrutement',
                        value: 'recruitment'
                    },
                    {
                        label: 'Pré-inscription',
                        value: 'preregistration'
                    },
                    {
                        label: 'Autres',
                        value: 'others'
                    }
                ]
            },
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            },
            style: {
                marginTop: '16px'
            }
        },
        {
            label: 'Quand souhaitez-vous recupérer vos documents ?',
            name: 'moment',
            type: 'select',
            SelectItems: {
                menuItemProps: [
                    {
                        label: 'Maintenant',
                        value: 'now'
                    },
                    {
                        label: 'Dans une heure',
                        value: 'in-one-hour'
                    },
                    {
                        label: 'Demain',
                        value: 'tomorrow'
                    },
                    {
                        label: 'Dans la semaine',
                        value: 'in-the-week'
                    }
                ]
            },
            containerProps: {
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12
            }
        }
    ];

    const initialValues = {
        full_name: '',
        email: '',
        phone: '',
        town: '',
        reason: '',
        moment: ''
    }

    const [formdata, setFormData] = useState(initialValues);

    const validationSchema = {
        full_name: Yup.string().max(255).required('Le nom et le prénom doivent être renseigné'),
        email: Yup.string().email("L'adresse email doit être valide").required("L'adresse email doit être renseigné"),
        phone: Yup.string().max(255).required("Le numéro de téléphone doit être renseigné"),
        town: Yup.string().max(255).required("Le ville de résidence doit être renseigné"),
        reason: Yup.string().max(255).required("Le motif doit être renseigné"),
        moment: Yup.string().max(255).required("Le moment de reception doit être renseigné")
    }
    return (
        <Box sx={{ marginTop: '16px' }}>
            <FormBuilder
                Field={fields}
                initialValues={formdata}
                validationSchema={validationSchema}
                renderSubmit={(
                    {
                       values,
                       handleSubmit,
                       errors
                }) => {
                   // console.log("renderSubmit",values);
                    return <Button
                       // style={{ display : 'none' }}
                        ref={props.buttonRef}
                        onClick={(e)=>handleSubmit()}
                        type={"submit"}>test</Button>;
                }}
                onSubmit={ (values: any,actions: any) =>  {
                    setFormData(values);
                }}
            />
        </Box>
    );
});

export default MyInformations;