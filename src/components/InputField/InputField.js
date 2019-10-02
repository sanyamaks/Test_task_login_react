import React, { PureComponent } from "react";
import "./InputField.css";

class InputField extends PureComponent {
  render() {
    let className = "input-field";
    return (
      <input
        className={
          this.props.className !== undefined && this.props.className !== null
            ? className + " " + this.props.className
            : className
        }
        type={this.props.type}
        placeholder={this.props.placeholder}
        pattern={isNaN(this.props.pattern) ? this.props.pattern : ""}
        onChange={this.props.onChange}
        value={this.props.value}
        required={
          this.props.required !== undefined && this.props.required !== null
            ? this.props.required
            : false
        }
        autoFocus={
          this.props.autoFocus !== undefined && this.props.autoFocus !== null
            ? this.props.autoFocus
            : false
        }
      />
    );
  }
}

export default InputField;
