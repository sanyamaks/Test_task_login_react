import React, { PureComponent } from "react";
import Button from "../Buton/Button";
import "./Logout.css";

class Logout extends PureComponent {
  render() {
    if (this.props.isActive) {
      return null;
    }
    return (
      <form className="form-logout">
        <img
          className="form-logout__user-avatar"
          src={this.props.userAvatar}
          alt={this.props.userName}
        />
        <div className="form-logout__username">{this.props.userName}</div>
        <Button
          onClick={this.props.onClick}
          value="Logout"
          className="user-page__button"
        />
      </form>
    );
  }
}

export default Logout;
