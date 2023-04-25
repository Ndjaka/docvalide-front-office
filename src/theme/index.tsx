import React from 'react';

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import palette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';

interface ThemeCustomizationProps {
    children?: React.ReactNode;
}

export default function ThemeCustomization({ children } :ThemeCustomizationProps) {

  let theme = createTheme({
    breakpoints,
    palette,
    typography,
    components
  });
 // theme = responsiveFontSizes(theme)

  return (
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
          </ThemeProvider>
      </StyledEngineProvider>
  );
}



