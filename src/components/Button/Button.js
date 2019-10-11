import React, { PureComponent } from "react";
import classNames from "classnames";
import "./Button.css";

class Button extends PureComponent {
  render() {
    return (
      <button
        {...this.props}
        className={classNames("button", this.props.className)}
      />
    );
  }
}

export default Button;
