import React, { PureComponent } from "react";
import "./Button.css";

class Button extends PureComponent {
  render() {
    let buttonClassName = "button";
    if (this.props.modificator !== undefined) {
      let modificator = " button_" + this.props.modificator;
      buttonClassName += modificator;
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
