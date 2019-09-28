import React, { PureComponent } from "react";
import "./Button.css";

class Button extends PureComponent {
  render() {
    let buttonClassName = "button";
    if (this.props.value === "Login") {
      buttonClassName += " button_login";
    } else if (this.props.value === "Logout"){
      buttonClassName += " button_logout";
    }
    return (
      <input
        type="submit"
        className={buttonClassName}
        value={this.props.value}
        onClick={this.props.onClick}
        onSubmit={this.props.onClick}
      />
    );
  }
}

export default Button;
