import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    formValid: false
  }

  render() {
    return (
      <div className="App">
        <header>
          Form Validation
        </header>
        <main role='main'>
          <form action='#' id='js-form'>
            <div class='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' className='form-field'
              value={this.state.username}/>
            </div>
            <div class='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' className='form-field'
              value={this.state.email}/>
            </div>
            <div class='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' className='form-field'
              value={this.state.password}/>
            </div>
            <div class='form-group'>
              <label htmlFor='password-confirmation'>Password Confirmation</label>
              <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' value={this.state.passwordConfirm}/>
            </div>
            <div class='form-controls'>
              <button className='button' type='submit'>Sign Up</button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
