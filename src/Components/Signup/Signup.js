import React, { Component } from "react";
import "../Login.css";
// import Header from '../Header/Header';
import AuthService from "../../Services/AuthService";
import Form from "./Form";
import Navigation from "../Navigation/Navigation";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstName: "",
      otherName: "",
      password: "",
      error: "",
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  doLogin = async (event) => {
    event.preventDefault();

    AuthService.register(
      this.state.username,
      this.state.firstName,
      this.state.otherName,
      this.state.password
    ).then(
      () => {
        // this.props.hasHistory.push('/home');
        window.location.href = "/";
      },
      (error) => {
        console.log("signup fail: error = { " + error.toString() + " }");
        this.setState({
          error:
            "Can not signup successfully ! Please check username/password again",
        });
      }
    );
  };

  render() {
    return (
      <>
        <Navigation />
        <Form onSubmit={this.doLogin} />
      </>
    );
  }
}

export default Signup;
