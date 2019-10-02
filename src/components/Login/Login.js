import React, { PureComponent } from "react";
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
      checkError: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
      checkError: true,
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
      checkError: false,
      textError: ""
    });
  }

  render() {
    if (!this.props.isActive) {
      return null;
    }
    let formClassName = "form-login",
      formClassNameMod = " form-login_error",
      emailClassName = "";
    if (this.state.checkError) {
      formClassName += formClassNameMod;
      emailClassName = "form-login__input-field-email-error";
    }
    return (
      <form className={formClassName} onSubmit={this.handleClick}>
        <div className="form-login__form-name">Log In</div>
        <InputField
          className={emailClassName}
          type="email"
          placeholder="E-Mail"
          pattern="([a-z0-9_-]+@[a-z0-9-]+\\.[a-z]{2,6})"
          onChange={this.handleChangeEmail}
          value={this.state.valueEmail}
          required={true}
          autoFocus={true}
        />
        <InputField
          className="form-login__input-field-password"
          type="password"
          placeholder="Password"
          onChange={this.handleChangePassword}
          value={this.state.valuePassword}
        />
        <ErrorNotification
          checkError={this.state.checkError}
          textError={this.state.textError}
        />
        <Button
          onClick={this.handleClick}
          value="Login"
          className="form-login__button"
        />
      </form>
    );
  }
}

export default Login;
