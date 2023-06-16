
import React from 'react';
import { FormikFieldWrapper, FormikFieldWrapperProps } from "./FormikFieldWrapper";
import { useField } from "formik";
import { FormControl, MenuItem, OutlinedTextFieldProps, Select, SelectProps, Typography } from "@mui/material";

interface selectOptions {
  label: string,
  value: string
}
interface FormikSelectFieldProps extends Partial<SelectProps>, FormikFieldWrapperProps {
  name: string,
  options: selectOptions[];
}

export const FormikSelectField = (props: FormikSelectFieldProps) => {
  const {xs, md, lg, sm, gridClassName, ...rest} = props;

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
        color={!!(meta.touched && meta.error) ? "red" : 'text.primary'}
      >
        {props.label}
      </Typography>
      <FormControl fullWidth>
        <Select
          {...rest}
          label={""}
          error={!!(meta.touched && meta.error)}
          name={field.name}
          onBlur={e => {
            if (props.onBlur)
              props.onBlur(e)
            field.onBlur(e);
          }}
          onChange={(e,c) => {
          if (props.onChange)
            props.onChange(e,c);
          field.onChange(e);
        }}
          variant="outlined"
          value={field.value}
          fullWidth={props.fullWidth ?? true}
        >
          {
            props.options.map((option) => (
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
        !!(meta.touched && meta.error) &&
        (<Typography
          mt={'4px'}
          ml={'14px'}
          letterSpacing={'0.4px'}
          fontSize={'0.75rem'}
          color={"#d32f2f"}
        >{meta.touched && meta.error}</Typography>)
      }
    </FormikFieldWrapper>)

}

export default FormikSelectField;