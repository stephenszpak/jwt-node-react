import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'
import App from './/App'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[200]
    },
    primary: {
      main: blue[900]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <Router>
    <App />
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)
