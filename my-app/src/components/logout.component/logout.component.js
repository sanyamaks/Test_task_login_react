import React, { PureComponent } from "react";
import Button from "./../buton.component/button.component";
import "./logout.style.css"

class Logout extends PureComponent {
  render() {
    if (this.props.isActive) {
      return null;
    }
    return (
      <form className="form form_logout">
        <img
          className="form__user-avatar"
          src={this.props.userAvatar}
          alt={this.props.userName}
        />
        <div className="form__username">{this.props.userName}</div>
        <Button isActive={this.props.isActive} onClick={this.props.onClick} />
      </form>
    );
  }
}

export default Logout;
