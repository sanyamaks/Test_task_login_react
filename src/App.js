import React, { PureComponent } from "react";
import mercdev from "./img/mercdev.svg";
import "./App.css";
import Login from "./components/Login/Login";
import UserPage from "./components/UserPage/UserPage";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
      userAvatar: ""
    };
    this.giveUserData = this.giveUserData.bind(this);
    this.clearUserData = this.clearUserData.bind(this);
  }

  giveUserData(name, photoUrl) {
    this.setState({
      isLogin: !this.state.isLogin,
      userName: name,
      userAvatar: photoUrl
    });
  }

  clearUserData() {
    this.setState({
      isLogin: !this.state.isLogin,
      userName: "",
      userAvatar: ""
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img className="logo-mercdev" src={mercdev} alt="mercdev" />
        </header>
        <main className="main">
          <Login
            isLogin={this.state.isLogin}
            giveUserData={this.giveUserData}
          />
          <UserPage
            isLogin={this.state.isLogin}
            userName={this.state.userName}
            userAvatar={this.state.userAvatar}
            clearUserData={this.clearUserData}
          />
        </main>
        <footer className="footer" />
      </div>
    );
  }
}

export default App;
