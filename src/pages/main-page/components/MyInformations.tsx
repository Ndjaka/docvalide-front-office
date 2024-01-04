import { Box, Grid, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { forwardRef } from 'react';
import * as Yup from 'yup';
import { FormikTextField } from '../../../components/Form/FormikTextField';
import FormikTelInput from '../../../components/Form/FormikTelInput';
import FormikSelectField from '../../../components/Form/FormikSelectField';
import FormikDateInput from '../../../components/Form/FormikDateInput';
import FormikAutocomplete from '../../../components/Form/FormikAutocomplete';
import dayjs, { Dayjs } from 'dayjs';
import ChoiceEnum from '../../../enums/ChoiceEnum';
import useFeeCriminalRecord from '../../../hooks/useFeeCriminalRecord';
import { FeeCriminalRecords } from '../../../types/FeeCriminalRecordTypes';
import removeDuplicateResidences from '../../../utils/feeCriminalRecordUtils';
import { generateOptions, groupRecordsByRegion } from "../../../utils/regionUtils";

interface MyInformationsProps {
  onSubmit: (values: any) => void;
  choiceType: ChoiceEnum;
}

export interface UserValues {
  full_name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  townOfResidence?: {
    id: string;
    label: string;
  };
  birth_date: Dayjs;
  birth_department: {
    id: string;
    label: string;
    region: string;
  };
  father_name: string;
  mother_name: string;
}

const MyInformations = forwardRef<HTMLButtonElement, MyInformationsProps>(
  (props, ref) => {
    const { choiceType, onSubmit } = props;
    const isExtract = choiceType === ChoiceEnum.Extract;

    const { data, isLoading } = useFeeCriminalRecord({
      tribunal: '',
      city: '',
    });

    const cities = removeDuplicateResidences(
      data?.data?.results as FeeCriminalRecords[]
    ).filter(({ status }: FeeCriminalRecords) => status)
      .map(({ residence }: FeeCriminalRecords) => ({
      id: residence,
      label: residence,
    }));

    const departments = generateOptions(groupRecordsByRegion(data?.data?.results as FeeCriminalRecords[]));
    console.log(departments);
    const initialValues: UserValues = {
      full_name: '',
      email: '',
      phone: '',
      reason: '',
      father_name: '',
      mother_name: '',
      birth_date: dayjs(new Date()),
      birth_department: {
        id: '',
        label: '',
        region: '',
      },
      townOfResidence: {
        id: '',
        label: '',
      },
    };

    const validationSchema = {
      full_name: Yup.string()
        .max(255)
        .required('Le nom et le prénom doivent être renseignés'),
      email: Yup.string()
        .email("L'adresse email doit être valide")
        .required("L'adresse email doit être renseignée"),
      phone: Yup.string()
        .max(255)
        .required('Le numéro de téléphone doit être renseigné'),
      townOfResidence: Yup.object().required(
        'La ville de résidence doit être renseignée'
      ),
      reason:
        isExtract
          ? Yup.string().optional()
          : Yup.string().max(255).required('Le motif doit être renseigné'),
      birth_date:
        !isExtract
          ? Yup.string().optional()
          : Yup.string()
              .max(255)
              .required('La date de naissance doit être renseignée'),
      birth_department:
        !isExtract
          ? Yup.object().optional()
          : Yup.object().required(
              'Le département de naissance doit être renseigné'
            ),
      father_name:
        isExtract
          ? Yup.string().max(255).required('Le nom du père doit être renseigné')
          : Yup.string().optional(),
      mother_name:
        isExtract
          ? Yup.string()
              .max(255)
              .required('Le nom de la mère doit être renseigné')
          : Yup.string().optional(),
    };

    return (
      <Box sx={{ marginTop: '16px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchema)}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ setFieldTouched, handleSubmit }) => {
            const breakPoints = !isExtract ? 12 : 6;

            return (<Form
              placeholder={''}
              onSubmit={(e) => {
                handleSubmit(e);
                Object.keys(initialValues).forEach((field) => {
                  setFieldTouched(field, true);
                });
              }}
            >
              <Grid container spacing={2}>
                <FormikTextField
                  lg={breakPoints}
                  md={breakPoints}
                  sm={breakPoints}
                  xs={12}
                  margin={'dense'}
                  size={'small'}
                  type={'text'}
                  variant={'outlined'}
                  name={'full_name'}
                  label={'Nom et Prénom'}
                />
                {isExtract && (
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
                {isExtract && (
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
                {isExtract && (
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
                {!isExtract && (
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
                {/* TODO: uncomment this to enable search by city */}
                <FormikAutocomplete
                  //  onInputChange={(e,value) => setTownOfResidence(value)}
                  loading={isLoading}
                  options={cities}
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
                {isExtract && (
                  <FormikAutocomplete
                    options={departments}
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
            </Form>);
          }}
        </Formik>
      </Box>
    );
  }
);

export default React.memo(MyInformations);
