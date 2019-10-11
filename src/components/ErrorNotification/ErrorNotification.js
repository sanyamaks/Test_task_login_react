import React, { PureComponent } from "react";
import "./ErrorNotification.css";

class ErrorNotification extends PureComponent {
  render() {
    let textError = this.props.textError;
    if (!this.props.invalid) {
      return null;
    }
    return <div className="form__error">{textError}</div>;
  }
}

export default ErrorNotification;
