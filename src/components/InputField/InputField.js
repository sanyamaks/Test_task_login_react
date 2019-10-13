import React, { PureComponent } from "react";
import classNames from "classnames";
import "./InputField.css";

class InputField extends PureComponent {
  render() {
    return (
      <input
        {...this.props}
        className={classNames("input-field", this.props.className, {"input-field_error": (this.props.invalid) })}
      />
    );
  }
}

export default InputField;
