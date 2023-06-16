import { OutlinedTextFieldProps, Typography } from "@mui/material";
import { FormikFieldWrapper, FormikFieldWrapperProps } from "./FormikFieldWrapper";
import * as React from "react";
import { useField } from "formik";
import { MuiTelInput } from "mui-tel-input";

interface FormikTelInputProps extends Partial<OutlinedTextFieldProps>, FormikFieldWrapperProps {
  name: string
}
export const FormikTelInput = (props: FormikTelInputProps) => {
  const {xs, md, lg,sm, gridClassName, ...rest} = props;

  const [field, meta, helpers] = useField({
    name: props.name,
  });

  return (
    <FormikFieldWrapper
      xs={xs}
      md={md}
      lg={lg}
      sm={sm}
      gridClassName={gridClassName}
    >
      <Typography
        mb={'3px'}
        variant={'body1'}
        color={!!(meta.touched && meta.error) ? "red" : 'text.primary'}>
        {rest.label}
      </Typography>
      <MuiTelInput
        {...rest}
        label={""}
        fullWidth
        error={!!(meta.touched && meta.error)}
        helperText={meta.touched && meta.error}
        name={rest.name}
        onBlur={e => {
          if (props.onBlur)
            props.onBlur(e)
          field.onBlur(e);
        }}
        onChange={values => helpers.setValue(values)}
        value={field.value}
        variant="outlined"
        focusOnSelectCountry
        defaultCountry={'CM'}
      />
    </FormikFieldWrapper>)

};
export default FormikTelInput;