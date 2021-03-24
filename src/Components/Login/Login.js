import React, { Component } from 'react';
import '../Login.css'
import Header from '../Header/Header';
import AuthService from '../../Services/AuthService'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthService
      .login(this.state.username,
        this.state.password)
      .then(
        () => {
          // this.props.hasHistory.push('/home');
          window.location.href = "/home"
        },
        error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({ error: "Can not signin successfully ! Please check username/password again" });
        }
      );
  }

   



  render() {

    return (
      <>
        <Header />
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={this.doLogin}>
           <label htmlFor="username"><strong>Username</strong></label>
                <input autoFocus 
                  type="text"
                  name="username" id="username"
                  value={this.state.username}
                  placeholder="Enter Username"
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
            <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" 
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
            <div>
              <button type="Submit" >Login</button>
              {
                this.state.error && (
                  <div style={{color: "red"}}>
                    {this.state.error}
                  </div>
                )
              }
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login