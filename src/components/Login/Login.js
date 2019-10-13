import React, { PureComponent } from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import InputField from "../InputField/InputField";
import "./Login.css";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: "",
      valuePassword: "",
      textError: "",
      invalid: 0 //1 - true, 0 - false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.isValid();
  }

  isValid() {
    let email = this.state.valueEmail,
      password = this.state.valuePassword,
      validation = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/;
    if (email === "" || password === "") {
      this.addErrorNotification("E-Mail or password is not entered");
    } else if (!validation.test(email)) {
      this.addErrorNotification("E-Mail doesn't match format");
    } else {
      this.requestUser(email, password);
    }
  }

  requestUser(email, password) {
    const self = this;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "force-cache",
      body: JSON.stringify({
        email: email,
        password: password,
        credentials: "include"
      })
    }).then(function(response) {
      if (!response.ok) {
        self.addErrorNotification("E-Mail or password is incorrect");
      } else {
        response.json().then(function(data) {
          self.props.giveUserData(data["name"], data["photoUrl"]);
          self.showLogout();
        });
      }
    });
  }

  addErrorNotification(textError) {
    this.setState({
      textError: textError,
      invalid: 1, //1 - true, 0 - false
      valuePassword: ""
    });
  }

  handleChangeEmail(event) {
    this.setState({ valueEmail: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ valuePassword: event.target.value });
  }

  showLogout() {
    this.setState({
      valueEmail: "",
      valuePassword: "",
      invalid: 0, //1 - true, 0 - false
      textError: ""
    });
  }

  render() {
    if (this.props.isLogin) {
      return null;
    }
    return (
      <form
        className={classNames("form-login", {
          "form-login_error": this.state.invalid
        })}
        onSubmit={this.handleClick}
      >
        <div className="form-login__form-name">Log In</div>
        <InputField
          className="form-login__input-field-email"
          type="text"
          placeholder="E-Mail"
          onChange={this.handleChangeEmail}
          value={this.state.valueEmail}
          autoFocus={true}
          invalid={this.state.invalid} //1 - true, 0 - false
        />
        <InputField
          className="form-login__input-field-password"
          type="password"
          placeholder="Password"
          onChange={this.handleChangePassword}
          value={this.state.valuePassword}
        />
        <ErrorNotification
          invalid={this.state.invalid}
          textError={this.state.textError}
        />
        <Button className="form-login__button">Login</Button>
      </form>
    );
  }
}

export default Login;
