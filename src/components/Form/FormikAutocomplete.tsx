import * as React from 'react';
import {Autocomplete, AutocompleteFreeSoloValueMapping, TextField} from "@mui/material";
import {FormikFieldWrapper, FormikFieldWrapperProps} from "./FormikFieldWrapper";
import {useField} from "formik";
import {ChipTypeMap} from "@mui/material/Chip";
import {UseAutocompleteProps} from "@mui/base";
import {useEffect} from "react";

export interface FormikAutocompleteProps<T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, FormikFieldWrapperProps {
  name: string
  fullWidth?: boolean
  country?: boolean
  loading?: boolean
  autoFocus?: boolean
  onChange?: undefined
  label?: string
  onValueChange?: (v:  (T | AutocompleteFreeSoloValueMapping<FreeSolo> | null | undefined) | (T | AutocompleteFreeSoloValueMapping<FreeSolo> | null | undefined)[]) => void
  placeholder?: string
}


export default function FormikAutocomplete<T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(props: FormikAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): JSX.Element {

  const {xs, md, lg, gridClassName, ...rest} = props;

  const [field, meta, helpers] = useField({
    name: props.name,
  });

  useEffect(() => {
    if (props.country && !props.value)
      fetchCountry();
  }, []);


  const fetchCountry = () => {
    fetch('https://ipapi.co/json/')
      .then(async (r) => {
        const {country_calling_code} = await r.json();
        const value = props.options.find(o => `+${(o as any).id}` === country_calling_code);
        if (props.onValueChange)
          props.onValueChange(value);
        if (value) {
          helpers.setValue(value)
        }
      })
      .catch(e => console.error('Unable to fetch default country'))
  }


  return (
    <FormikFieldWrapper xs={xs}
                        md={md}
                        lg={lg}
                        gridClassName={gridClassName}
    >
      <Autocomplete
        loading={rest.loading}
        freeSolo={rest.freeSolo}
        disabled={rest.disabled}
        multiple={rest.multiple}
        isOptionEqualToValue={props.isOptionEqualToValue}
        renderInput={(params) =>
          <TextField
            {...params}
            autoFocus={rest.autoFocus}
            label={props.label}
            name={props.name}
            onBlur={e => {
              field.onBlur(e);
            }}
            placeholder={props.placeholder}
            fullWidth={props.fullWidth ?? true}
            error={!!(meta.touched && meta.error)}
            helperText={meta.touched && meta.error}
          />}
        value={field.value || (props.multiple ? [] : null)}
        onInputChange={(event, value, reason) => {
          if (props.freeSolo) {
            helpers.setValue(value);
          }
        }}
        onChange={(e, value, reason, details) => {
          if (props.onValueChange)
            props.onValueChange(value);
          helpers.setValue(value);
        }}
        options={props.options}
        onBlur={e => {
          field.onBlur(e);
        }}
      />
    </FormikFieldWrapper>
  );
};