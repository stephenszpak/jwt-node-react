import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import apiService from './apiService'

import Navbar from './Navbar'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Home from './components/Home'
import List from './components/List'

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
      <div className='App container'>
        <Navbar currentUser={currentUser} />
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
      </div>
    )
  }
}

export default App