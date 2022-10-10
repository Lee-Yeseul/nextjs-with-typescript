import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  height: '100%',
});

export const devTheme = createTheme({
  // keyColor: #b388ff
  // subColor :#E2D6FF
});

export const productionTheme = createTheme({
  // keyColor: #b388ff
  // subColor :#E2D6FF
});
