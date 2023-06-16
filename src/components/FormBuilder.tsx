import React from 'react';
import {Typography, Box, TextField, Grid, MenuItem, FormControl, Select, Button, GridProps} from '@mui/material';
import {BaseTextFieldProps} from "@mui/material/TextField/TextField";
import {MuiTelInput} from 'mui-tel-input'
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from "yup";

export interface FieldProps extends BaseTextFieldProps {
    containerProps?: GridProps;
    SelectItems?: {
        menuItemProps: {
            value: string,
            label: string
        }[];
    },
    style?: React.CSSProperties,
    name?: string
}

interface formProps {
    Field: FieldProps[],
    initialValues: any,
    validationSchema: any,
    onSubmit: (values: any,actions: any) => void,
    renderSubmit: (values: FormikProps<any>) => React.ReactNode,

}

const  FormBuilder =(props : formProps) => {

    const {Field, initialValues, validationSchema, onSubmit, renderSubmit} = props;

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={(values, actions) => {
                onSubmit(values, actions);
            }}>
            {(formik) => (
                <Form>
                    <Grid container spacing={2}>
                        {
                            Field.map(({type = 'text', ...form}) => (
                                <Grid key={`${type}_${form.name}`} item {...form.containerProps}>
                                    {
                                        ['number', 'email', 'password','text'].indexOf(type) !== -1 ? (
                                            <Box style={{...form.style}}>
                                                <Typography
                                                mb={'3px'}
                                                variant={'body1'}
                                                color={'text.primary'}>
                                                {form.label}
                                            </Typography><TextField
                                                required={form.required || false}
                                                error={Boolean(formik.touched[String(form.name)] && formik.errors[String(form.name)])}
                                                fullWidth
                                                helperText={
                                                    <b>{formik.touched[String(form.name)] && (formik.errors[String(form.name)] as string)}</b>}
                                                name={form?.name}
                                                margin="dense"
                                                size={"small"}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                type={type}
                                                value={formik.values[String(form.name)]}
                                                variant="outlined"
                                                rows={form.rows}
                                                multiline={form.multiline}/>
                                            </Box>
                                        ) : ['phone'].indexOf(type) !== -1 ? (
                                            <Box style={{...form.style}}>
                                                <Typography
                                                    mb={'3px'}
                                                    variant={'body1'}
                                                    color={'text.primary'}>
                                                    {form.label}
                                                </Typography>
                                                <MuiTelInput
                                                    required={form.required || false}
                                                    error={Boolean(formik.touched[String(form.name)] && formik.errors[String(form.name)])}
                                                    fullWidth
                                                    helperText={<b>{formik.touched[String(form.name)] && (formik.errors[String(form.name)] as string)}</b>}
                                                    name={form?.name}
                                                    margin="dense"
                                                    size={"small"}
                                                    onBlur={formik.handleBlur}
                                                    onChange={values => formik.setFieldValue(form.name as string, values)}
                                                    value={formik.values[String(form.name)]}
                                                    variant="outlined"
                                                    focusOnSelectCountry
                                                    defaultCountry={'CM'}
                                                />
                                            </Box>
                                        ) : ['select'].indexOf(type) !== -1 ? (
                                             <Box style={{...form.style}}>
                                                <Typography
                                                    mb={'3px'}
                                                    variant={'body1'}
                                                    color={'text.primary'}>
                                                    {form.label}
                                                </Typography>
                                                <FormControl fullWidth>
                                                    <Select
                                                        required={form.required || false}
                                                        error={Boolean(formik.touched[String(form.name)] && formik.errors[String(form.name)])}
                                                        fullWidth
                                                        name={form?.name}
                                                        margin="dense"
                                                        size={"small"}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        value={formik.values[String(form.name)]}
                                                        variant="outlined"
                                                    >
                                                        {
                                                            form?.SelectItems?.menuItemProps.map((option) => (
                                                                <MenuItem
                                                                    key={option.value}
                                                                    value={option.value}
                                                                >
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))
                                                        }

                                                    </Select>
                                                </FormControl>
                                                {
                                                    formik.touched[String(form.name)] && formik.errors[String(form.name)] &&
                                                    (<Typography
                                                        color={"red"}>{formik.errors[String(form.name)] as string}</Typography>)
                                                }
                                             </Box>
                                        ) : <div/>
                                    }
                                </Grid>
                            ))
                        }
                    </Grid>
                    {renderSubmit &&
                        renderSubmit(formik)}
                </Form>
            )}
        </Formik>
    );
};

export default FormBuilder;