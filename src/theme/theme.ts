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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.65rem',
          textTransform: 'none',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
