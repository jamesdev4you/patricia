import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import './index.css';
import Typography from '@mui/material/Typography';
import Menu from './pageComponents/Menu/menu';
import { Routes, Route } from 'react-router-dom';
import Home from './pageComponents/Home/home';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FEFAE0',
    },
    secondary: {
      main: '#D4A373',
    },
    error: {
      main: '#FAEDCD',
    },
  },
  typography: {
    h1: {
      fontFamily: 'KaushanScript',
      fontSize: '134px',
    },
    h2: {
      fontFamily: 'KaushanScript',
    },
    h3: {
      fontFamily: 'KatibehRegular',
    },
    h4: {
      fontFamily: 'KatibehRegular',
    },
    h5: {
      fontFamily: 'KatibehRegular',
    },
    h6: {
      fontFamily: 'KatibehRegular',
    },
    subtitle1: {
      fontFamily: 'KatibehRegular',
    },
    subtitle2: {
      fontFamily: 'KatibehRegular',
    },
    body1: {
      fontFamily: 'KatibehRegular',
    },
    body2: {
      fontFamily: 'KatibehRegular',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 8,
  variants: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
