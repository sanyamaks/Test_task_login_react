import React, { PureComponent } from "react";
import Button from "../Buton/Button";
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
    if (this.props.isActive) {
      return null;
    }
    return (
      <form className="user-page">
        <img
          className="user-page__user-avatar"
          src={this.props.userAvatar}
          alt={this.props.userName}
        />
        <div className="user-page__username">{this.props.userName}</div>
        <Button
          onClick={this.handleClick}
          value="Logout"
          modificator="logout"
        />
      </form>
    );
  }
}

export default UserPage;
