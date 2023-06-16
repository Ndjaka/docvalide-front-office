import { Box, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React, {forwardRef} from 'react';
import * as Yup from 'yup';
import { FormikTextField } from "../../../components/Form/FormikTextField";
import FormikTelInput from "../../../components/Form/FormikTelInput";
import FormikSelectField from "../../../components/Form/FormikSelectField";

interface MyInformationsProps {
    onSubmit: (values:any) => void;
}

export interface UserValues  {
  full_name: string,
  email: string,
  phone: string,
  town: string,
  reason: string,
  moment: string
}

const MyInformations = forwardRef<HTMLButtonElement, MyInformationsProps>((props,ref) => {

    const initialValues : UserValues = {
        full_name: '',
        email: '',
        phone: '',
        town: '',
        reason: '',
        moment: ''
    }

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
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(validationSchema)}
                onSubmit={(values, formikHelpers) => {
                    props.onSubmit(values);
                }}
              >
                {({
                      setFieldTouched,
                      handleSubmit,
                      resetForm,
                      errors,
                      values
                  }) =>
                  <Form
                    onSubmit={e => {
                        console.log({ errors, values });
                        handleSubmit(e);
                        Object.keys(initialValues)
                          .forEach(field => {
                              setFieldTouched(field, true);
                          })
                    }}
                  >
                      <Grid container spacing={2}>
                          <FormikTextField
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            type={'text'}
                            variant={'outlined'}
                            name={'full_name'}
                            label={'Nom et Prénom'}
                          />
                          <FormikTextField
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            type={'email'}
                            variant={'outlined'}
                            name={'email'}
                            label={'Email'}
                          />
                          <FormikTelInput
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            type={'phone'}
                            variant={'outlined'}
                            name={'phone'}
                            label={'Téléphone'}
                              />
                          <FormikTextField
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            type={'text'}
                            variant={'outlined'}
                            name={'town'}
                            label={'Ville de résidence'}
                          />
                          <FormikSelectField
                            name={'reason'}
                            options={[
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
                                ]}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            label={'Motif'}
                            sx={{ marginTop: '16px' }}
                          />
                          <FormikSelectField
                            name={'moment'}
                            options={[
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
                            ]}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={12}
                            margin={"dense"}
                            size={"small"}
                            label={'Quand souhaitez-vous recupérer vos documents ?'}
                          />

                          <button
                            ref={ref}
                            type={'submit'}
                           style={{ display: 'none' }}/>
                      </Grid>
                  </Form>
                }
            </Formik>
        </Box>
    );
});

export default MyInformations;