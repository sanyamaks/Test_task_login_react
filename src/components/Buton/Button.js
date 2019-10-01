import React, { PureComponent } from "react";
import "./Button.css";

class Button extends PureComponent {
  render() {
    let className = "button";
    if (isNaN(this.props.className)) {
      className += " " + this.props.className;
    }
    return (
      <input
        type="submit"
        className={className}
        value={this.props.value}
        onClick={this.props.onClick}
        onSubmit={this.props.onClick}
      />
    );
  }
}

export default Button;
