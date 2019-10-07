import React, { PureComponent } from "react";
import classNames from "classnames";
import "./Button.css";

class Button extends PureComponent {
  render() {
    let classNameParent = this.props.className;
    return (
      <button
        {...this.props}
        className={classNames("button", {
          [classNameParent]:
            this.props.className !== undefined && this.props.className !== null
        })}
      />
    );
  }
}

export default Button;
