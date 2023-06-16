// @flow
import * as React from 'react';
import {Grid} from "@mui/material";

export type FormikFieldWrapperProps = {
  xs?: number
  md?: number
  lg?: number
  sm?: number
  children?: React.ReactNode
  gridClassName?: string
};

export const FormikFieldWrapper = (props: FormikFieldWrapperProps) => {
  const {xs, sm, md, lg, gridClassName, children} = props;

  const withGrid = xs || md || lg || gridClassName

  return (
    (withGrid ? <Grid xs={xs} lg={lg} md={md} sm={sm} item className={gridClassName}>
      {children}
    </Grid> : <React.Fragment>
      {children}
    </React.Fragment>)
  );
};