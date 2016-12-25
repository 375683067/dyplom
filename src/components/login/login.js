import React from 'react';
import './login.scss';

class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    }
  }

  loginChanged(e) {
    this.updateLoginInfo('login', e.target);

  }

  passwordChanged(e) {
    this.updateLoginInfo('password', e.target);
  }

  updateLoginInfo(type, target) {
    let value = target.value;
    this.setState({
      [type]: value
    });
  }

  doLogin() {
    if (this.state.login.length && this.state.password.length) {
      this.props.doLogin(this.state.login, this.state.password);
    } else {
      alert('provide correct password and login!!!! ');
    }
  }

  render() {
    return (
      <div className="md-login">
        <div className="md-title">Dyplom</div>
        <input className="md-login__input" value={this.state.login} onChange={this.loginChanged.bind(this)} type="text" placeholder="login" />
        <br/>
        <input className="md-login__input" value={this.state.password} onChange={this.passwordChanged.bind(this)} type="password" placeholder="password" />
        <br/>
        <div onClick={this.doLogin.bind(this)} className="md-button md-button__login">login</div>
      </div>
    );
  }
}

export default LoginForm;
