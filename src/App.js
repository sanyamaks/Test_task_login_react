import React, { PureComponent } from "react";
import mercdev from "./img/mercdev.svg";
import "./App.css";
import Login from "./components/Login/Login";
import UserPage from "./components/UserPage/UserPage";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      userName: "",
      userAvatar: ""
    };
    this.giveUserData = this.giveUserData.bind(this);
    this.clearUserData = this.clearUserData.bind(this);
  }

  giveUserData(name, photoUrl) {
    this.setState({
      isActive: !this.state.isActive,
      userName: name,
      userAvatar: photoUrl
    });
  }

  clearUserData() {
    this.setState({
      isActive: !this.state.isActive,
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
            isActive={this.state.isActive}
            userName={this.state.userName}
            userAvatar={this.state.userAvatar}
            giveUserData={this.giveUserData}
          />
          <UserPage
            isActive={this.state.isActive}
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
