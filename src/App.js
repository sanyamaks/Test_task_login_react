import React, { PureComponent } from "react";
import mercdev from "./img/mercdev.svg";
import "./App.css";
import Login from "./components/login.component/login.component";
import Logout from "./components/logout.component/logout.component";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      valueEmail: "",
      valuePassword: "",
      userName: "",
      userAvatar: "",
      textError: "",
      checkError: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isActive) {
      this.isValid();
    } else if (!this.state.isActive) {
      this.showLogin();
    }
  }

  isValid() {
    let email = this.state.valueEmail,
      password = this.state.valuePassword,
      validation = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/;
    if (email === "" || password === "") {
      this.addErrorNotification("E-Mail or password is not entered");
    } else if (!validation.test(email)) {
      this.addErrorNotification("E-Mail doesn't match format");
      // onChangeEmailInput(email);
      // onChangePasswordInput(password);
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
        console.log("Error");
        self.addErrorNotification("E-Mail or password is incorrect");
        // onChangeEmailInput(email);
        // onChangePasswordInput(password);
      } else {
        response.json().then(function(data) {
          self.showLogout(data["name"], data["photoUrl"]);
        });
      }
    });
  }

  showLogin() {
    this.setState({
      isActive: !this.state.isActive,
      userName: "",
      userAvatar: ""
    });
  }

  showLogout(name, photoUrl) {
    this.setState({
      isActive: !this.state.isActive,
      userName: name,
      userAvatar: photoUrl,
      valueEmail: "",
      valuePassword: "",
      checkError: false,
      textError: ""
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

  render() {
    return (
      <div className="app">
        <header className="header">
          <img className="logo-mercdev" src={mercdev} alt="mercdev" />
        </header>
        <main className="main">
          <Login
            isActive={this.state.isActive}
            onClick={this.handleClick}
            valueEmail={this.state.valueEmail}
            valuePassword={this.state.valuePassword}
            onChangeEmail={this.handleChangeEmail}
            onChangePassword={this.handleChangePassword}
            textError={this.state.textError}
            checkError={this.state.checkError}
          />
          <Logout
            isActive={this.state.isActive}
            onClick={this.handleClick}
            userName={this.state.userName}
            userAvatar={this.state.userAvatar}
          />
        </main>
        <footer className="footer" />
      </div>
    );
  }
}

export default App;
