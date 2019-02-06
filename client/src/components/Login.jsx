import React, { Component } from 'react';
import apiService from '../apiService'

class Login extends Component {
  state = {
    fields: {
      email: '',
      password: ''
    }
  };

  onInputChange(userInput) {
    this.setState({
      fields: {
        ...this.state.fields,
        [userInput.target.name]: userInput.target.value
      }
    })
  }

  onFormSubmit(sub) {
    sub.preventDefault();

    apiService.login(this.state.fields).then(user => {
      this.setState({
        fields: {
          email: '',
          password: ''
        }
      })

      if (user) {
        this.props.onLoginSuccess(user);
        this.props.history.push('/');
      }
    });
  };


  render() {
    const { email, password } = this.state.fields
    return (
      <div className='Login'>
        <div className='row'>
          <div className='column column-33 column-offset-33'>
            <h1>Log In</h1>
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
              <input type="text" placeholder="Email" name="email" value={email} />
              <input type="password" placeholder="Password" name="password" value={password} />
              <button>Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;