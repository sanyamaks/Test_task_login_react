import React, { PureComponent } from "react";
import Button from "../Button/Button";
import "./UserPage.css";

class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clearUserData();
  }

  render() {
    if (!this.props.isLogin) {
      return null;
    }
    return (
      <div className="user-page">
        <img
          className="user-page__user-avatar"
          src={this.props.userAvatar}
          alt={this.props.userName}
        />
        <div className="user-page__username">{this.props.userName}</div>
        <Button onClick={this.handleClick} className="user-page__button">
          Logout
        </Button>
      </div>
    );
  }
}

export default UserPage;
