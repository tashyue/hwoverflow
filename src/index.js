import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: { // grey
      light: '#708690',
      main: '#445963',
      dark: '#1b3039'
    },
    secondary: { // light indigo
      light: '#9ea7d8',
      main: '#d0d8ff',
      dark: '#6e78a6'
    },
    text: {
      primary: '#263238', // dark  blue grey
      secondary: '#eceff1' // almost white
    },
    type: 'light' // select light or dark theme
  },
});



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

