// @flow
import { Typography } from '@mui/material';
import {
  FormikFieldWrapper,
  FormikFieldWrapperProps,
} from './FormikFieldWrapper';
import { useField } from 'formik';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateTimePickerProps } from '@mui/lab';
import palette from '../../theme/palette';
import 'dayjs/locale/fr';
dayjs.locale('fr');

interface FormikDateInputProps
  extends Partial<DateTimePickerProps<any>>,
    FormikFieldWrapperProps {
  name: string;
}

const FormikDateInput = (props: FormikDateInputProps) => {
  const { xs, md, lg, sm, gridClassName, ...rest } = props;

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
        variant={'body1'}
        color={!!(meta.touched && meta.error) ? 'red' : 'text.primary'}
        mb={'5px'}
      >
        {props.label}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DateTimePicker']}
          sx={{
            width: '100%',
            overflow: 'hidden',
            py: 0,
          }}
        >
          <DateTimePicker
            {...rest}
            defaultValue={field.value}
            slotProps={{
              textField: {
                margin: 'normal',
                size: 'small',
                name: field.name,
                error: !!(meta.touched && meta.error),
                helperText: meta.touched && meta.error,
                sx: { marginTop: '6px' },
              },
              inputAdornment: {
                position: 'end',
                sx: {
                  marginRight: '11px',
                  paddingLeft: 0,
                  '& svg': {
                    color: palette?.primary?.main,
                  },
                },
              },
            }}
            views={['year', 'month', 'day']}
            label={''}
            onChange={(value: any, _: any) => {
              if (props.onChange) props.onChange(dayjs(value).format('YYYY-MM-DD'));
              helpers.setValue(dayjs(value).format('YYYY-MM-DD'));
            }
          }
            format={'DD/MM/YYYY'}
          />
        </DemoContainer>
      </LocalizationProvider>
    </FormikFieldWrapper>
  );
};

export default FormikDateInput;
