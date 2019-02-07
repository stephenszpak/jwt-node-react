import React, { Component } from 'react';
import apiService from '../../apiService';

class Register extends Component {
  state = {
    fields: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  };

  onInputChange(userInput) {
    this.setState({
      fields: {
        ...this.state.fields,
        [userInput.target.name]: userInput.target.value
      }
    })
  };

  onFormSubmit(sub) {
    sub.preventDefault();

    apiService.register(this.state.fields).then(user => {
      this.setState({
        fields: {
          email: '',
          password: '',
          firstName: '',
          lastName: ''
        }
      })

      if (user) {
        this.props.onRegisterSuccess(user);
        this.props.history.push('/');
      }
    });
  };

  render() {
    const { firstName, lastName, email, password } = this.state.fields
    return (
      <div className='Register'>
        <div className='row'>
          <div className='column column-33 column-offset-33'>
            <h1>Sign Up</h1>
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
              <input type="text" placeholder="First Name" name="firstName" value={firstName} /> <br/>
              <input type="text" placeholder="Last Name" name="lastName" value={lastName} /><br />
              <input type="text" placeholder="Email" name="email" value={email} /><br />
              <input type="password" placeholder="Password" name="password" value={password} /><br />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;