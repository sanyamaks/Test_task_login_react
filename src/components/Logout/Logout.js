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
        <Button isActive={this.props.isActive} onClick={this.props.onClick} />
      </form>
    );
  }
}

export default Logout;
