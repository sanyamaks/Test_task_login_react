import React, { PureComponent } from "react";
import "./Button.css"

class Button extends PureComponent {
  render() {
    if (this.props.isActive) {
      return (
        <input
          type="submit"
          className="form__button form__button_login"
          value="Login"
          onClick={this.props.onClick}
          onSubmit={this.props.onClick}
        />
      );
    } else if (!this.props.isActive) {
      return (
        <input
          type="button"
          className="form__button form__button_logout"
          value="Logout"
          onClick={this.props.onClick}
        />
      );
    }
  }
}

export default Button;
