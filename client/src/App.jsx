import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import apiService from './apiService'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'

import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Home from './components/Home'
import List from './components/List'

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

class App extends React.Component {
  state = { currentUser: apiService.getCurrentUser() }

  onLoginSuccess(user) {
    this.setState({ currentUser: apiService.getCurrentUser() })
  }

  logout() {
    apiService.logout()
    this.setState({ currentUser: null })
  }

  render() {
    const { currentUser } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route
            path="/login"
            render={(props) => {
              return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return <Logout onLogout={this.logout.bind(this)} />
            }}
          />
          <Route
            path="/register"
            render={(props) => {
              return <Register {...props} onRegisterSuccess={this.onLoginSuccess.bind(this)} />
            }}
          />
          <Route
            path="/list"
            render={() => {
              return currentUser ? <List /> : <Redirect to="/login" />
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default App