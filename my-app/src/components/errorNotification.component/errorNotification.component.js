import React, { PureComponent } from "react";
import "./errorNotification.style.css";

class ErrorNotification extends PureComponent {
  render() {
    let textError = this.props.textError;
    if (!this.props.checkError) {
      return null;
    }
    return <div className="form__error">{textError}</div>;
  }
}

export default ErrorNotification;
