import React, { PureComponent } from "react";
import classNames from "classnames";
import "./InputField.css";

class InputField extends PureComponent {
  render() {
    const { invalid, className, ...otherProps } = this.props;
    return (
      <input
        {...otherProps}
        className={classNames("input-field", className, {
          "input-field_error": invalid
        })}
      />
    );
  }
}

export default InputField;
