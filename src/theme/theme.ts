import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#39aa5d',
      contrastText: '#292B32',
    },
    secondary: {
      main: '#9e7b84',
    },
    text: {
      primary: '#292B32',
      secondary: '#9e7b84',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.65rem',
          textTransform: 'none',
        },
        sizeSmall: {
          minWidth: '40px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#292b321a',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '::placeholder': {
            fontStyle: 'italic',
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
