import { Box, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React, { forwardRef } from "react";
import * as Yup from "yup";
import { FormikTextField } from "../../../components/Form/FormikTextField";
import FormikTelInput from "../../../components/Form/FormikTelInput";
import FormikSelectField from "../../../components/Form/FormikSelectField";
import FormikDateInput from "../../../components/Form/FormikDateInput";
import FormikAutocomplete from "../../../components/Form/FormikAutocomplete";
import cities from "../../../data/cities.json";
import departments from "../../../data/department.json";
import generateOptions from "../../../utils/regionUtils";
import dayjs, { Dayjs } from "dayjs";
import ChoiceEnum from "../../../enums/ChoiceEnum";

interface MyInformationsProps {
    onSubmit: (values:any) => void;
    choiceType: ChoiceEnum,
}

export interface UserValues  {
  full_name?: string,
  email?: string,
  phone?: string,
  reason?: string,
  moment?: string,
  townOfResidence?: string,
  birth_date: Dayjs,
  birth_department: string,
  father_name: string,
  mother_name: string
}

const MyInformations = forwardRef<HTMLButtonElement, MyInformationsProps>((props,ref) => {

    const { choiceType , onSubmit } = props;

    const initialValues : UserValues = {
        full_name: '',
        email: '',
        phone: '',
        reason: '',
        moment: '',
        father_name: '',
        mother_name: '',
        birth_date:  dayjs(new Date()),
        birth_department: '',
        townOfResidence: '',

    }

  console.log({ "MyInformations--birth_department" : choiceType === ChoiceEnum.Legalization  });

    const validationSchema = {
        full_name: Yup.string().max(255).required('Le nom et le prénom doivent être renseigné'), // for extract and legalization
        email: Yup.string().email("L'adresse email doit être valide").required("L'adresse email doit être renseigné"), // for extract and legalization
        phone: Yup.string().max(255).required("Le numéro de téléphone doit être renseigné"), // for extract and legalization
        townOfResidence: Yup.object().required("Le ville de résidence doit être renseigné"), // for extract and legalization
        reason: choiceType === ChoiceEnum.Extract ? Yup.string().optional() : Yup.string().max(255).required("Le motif doit être renseigné"), // for legalization
        moment: choiceType === ChoiceEnum.Extract ? Yup.string().optional() : Yup.string().max(255).required("Le moment de reception doit être renseigné"),
        birth_date: choiceType === ChoiceEnum.Legalization ? Yup.string().optional() : Yup.string().max(255).required("La date de naissance doit être renseigné"), // for extract
        birth_department: choiceType === ChoiceEnum.Legalization ? Yup.object().optional() : Yup.object().required("Le département de naissance doit être renseigné"), // for extract
        father_name: choiceType === ChoiceEnum.Extract ? Yup.string().max(255).required("Le nom du père doit être renseigné") : Yup.string().optional() , // for extract and legalization
        mother_name: choiceType === ChoiceEnum.Extract ? Yup.string().max(255).required("Le nom de la mère doit être renseigné") : Yup.string().optional() , // for extract and legalization
    }

    return (
      <Box sx={{ marginTop: '16px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchema)}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ setFieldTouched, handleSubmit,errors }) => (
            <Form
              onSubmit={(e) => {
                console.log({ errors });
                handleSubmit(e);
                Object.keys(initialValues).forEach((field) => { setFieldTouched(field, true); });
              }}
            >
              <Grid container spacing={2}>
                <FormikTextField
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  margin={'dense'}
                  size={'small'}
                  type={'text'}
                  variant={'outlined'}
                  name={'full_name'}
                  label={'Nom et Prénom'}
                />
                {choiceType === ChoiceEnum.Extract && (
                  <FormikTextField
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    margin={'dense'}
                    size={'small'}
                    type={'text'}
                    variant={'outlined'}
                    name={'father_name'}
                    label={'Nom du père'}
                  />
                )}
                {choiceType === ChoiceEnum.Extract && (
                  <FormikTextField
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    margin={'dense'}
                    size={'small'}
                    type={'text'}
                    variant={'outlined'}
                    name={'mother_name'}
                    label={'Nom de la mère'}
                  />
                )}
                <FormikTextField
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  margin={'dense'}
                  size={'small'}
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
                  margin={'dense'}
                  size={'small'}
                  type={'phone'}
                  variant={'outlined'}
                  name={'phone'}
                  label={'Téléphone'}
                />
                {choiceType === ChoiceEnum.Extract && (
                  <FormikDateInput
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    name={'birth_date'}
                    margin={'dense'}
                    label={'Date de naissance'}
                    size={'small'}
                  />
                )}
                {choiceType === ChoiceEnum.Legalization && (
                  <FormikSelectField
                    name={'reason'}
                    options={[
                      {
                        label: 'Concours',
                        value: 'competition',
                      },
                      {
                        label: 'Recrutement',
                        value: 'recruitment',
                      },
                      {
                        label: 'Pré-inscription',
                        value: 'preregistration',
                      },
                      {
                        label: 'Autres',
                        value: 'others',
                      },
                    ]}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    margin={'dense'}
                    size={'small'}
                    label={'Motif'}
                  />
                )}
                {
                  choiceType === ChoiceEnum.Legalization &&
                  (<FormikSelectField
                    name={'moment'}
                    options={[
                      {
                        label: 'Maintenant',
                        value: 'now',
                      },
                      {
                        label: 'Dans une heure',
                        value: 'in-one-hour',
                      },
                      {
                        label: 'Demain',
                        value: 'tomorrow',
                      },
                      {
                        label: 'Dans la semaine',
                        value: 'in-the-week',
                      },
                    ]}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    margin={'dense'}
                    size={'small'}
                    label={'Période de réception des documents'}
                  />
                  )
                }

                <FormikAutocomplete
                  options={cities.residence}
                  label={'Ville de résidence'}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value?.id
                  }
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  name={'townOfResidence'}
                />
                {choiceType === ChoiceEnum.Extract && (
                  <FormikAutocomplete
                    options={generateOptions(departments)}
                    groupBy={(option) => option.region}
                    label={'Département de naissance'}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    name={'birth_department'}
                  />
                )}

                <button ref={ref} type={'submit'} style={{ display: 'none' }} />
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    );
});

export default React.memo(MyInformations);