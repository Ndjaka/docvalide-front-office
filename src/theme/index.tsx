import React from 'react';

import { createTheme,ThemeProvider,responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import palette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';

interface ThemeCustomizationProps {
    children?: React.ReactNode;
}

 let themeCustomized = createTheme({
    breakpoints,
    palette,
    typography,
    components
});

themeCustomized = responsiveFontSizes(themeCustomized)

export default function ThemeCustomization({ children } :ThemeCustomizationProps) {

  return (
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themeCustomized}>
              <CssBaseline />
              {children}
          </ThemeProvider>
      </StyledEngineProvider>
  );
}



