import * as React from 'react';
import {
  Autocomplete,
  AutocompleteFreeSoloValueMapping, CircularProgress,
  darken,
  lighten,
  TextField,
  Typography,
} from '@mui/material';
import {
  FormikFieldWrapper,
  FormikFieldWrapperProps,
} from './FormikFieldWrapper';
import { useField } from 'formik';
import { ChipTypeMap } from '@mui/material/Chip';
import { UseAutocompleteProps } from '@mui/base';
import { styled } from '@mui/material/styles';
import palette from '../../theme/palette';

export interface FormikAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    FormikFieldWrapperProps {
  name: string;
  fullWidth?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  onChange?: undefined;
  label?: string;
  onValueChange?: (
    v:
      | (T | AutocompleteFreeSoloValueMapping<FreeSolo> | null | undefined)
      | (T | AutocompleteFreeSoloValueMapping<FreeSolo> | null | undefined)[]
  ) => void;
  placeholder?: string;
  groupBy?: (option: T) => string;
  onPaginateAutoComplete?: () => void;
}

export default function FormikAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  props: FormikAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element {
  const { xs, md, sm, lg, gridClassName, ...rest } = props;

  const [field, meta, helpers] = useField({
    name: props.name,
  });

  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
  }));

  const GroupItems = styled('ul')({
    padding: 0,
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
        variant={'body1'}
        mb={'3px'}
        color={!!(meta.touched && meta.error) ? 'red' : 'text.primary'}
      >
        {props.label}
      </Typography>
      <Autocomplete
        loading={rest.loading}
        freeSolo={rest.freeSolo}
        disabled={rest.disabled}
        multiple={rest.multiple}
        isOptionEqualToValue={props.isOptionEqualToValue}
        groupBy={props.groupBy}
        renderInput={(params) => (
          <TextField
            {...params}
            variant={'outlined'}
            autoFocus={rest.autoFocus}
            label={''}
            name={props.name}
            margin={'dense'}
            size={'small'}
            onBlur={(e) => {
              field.onBlur(e);
            }}
            placeholder={props.placeholder}
            fullWidth={props.fullWidth ?? true}
            error={!!(meta.touched && meta.error)}
            helperText={meta.touched && meta.error}
            sx={{
              '& .MuiOutlinedInput-input': {
                border: 'none',
              },
              '& svg': {
                color: palette?.primary?.main,
              },
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {props.loading ? <CircularProgress color={"primary"}  size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        value={field.value || (props.multiple ? [] : null)}
        onInputChange={(event, value, reason) => {
          props.onInputChange?.(event, value, reason);
          if (props.freeSolo) {
            helpers.setValue(value);
          }
        }}
        onChange={(e, value, reason, details) => {
          if (props.onValueChange) props.onValueChange(value);
              helpers.setValue(value);
        }}
        options={props.options}
        onBlur={(e) => {
          field.onBlur(e);
        }}
      />
    </FormikFieldWrapper>
  );
}
