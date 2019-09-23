import React, { PureComponent } from "react";
import Button from "./../buton.component/button.component";
import ErrorNotification from "./../errorNotification.component/errorNotification.component";
import "./login.style.css";

class Login extends PureComponent {
  render() {
    if (!this.props.isActive) {
      return null;
    }
    let formClassNameEmpty = "form-login",
      formClassNameMod = " form-login_error",
      formClassName = formClassNameEmpty,
      emailClassNameEmpty = "form-login__input",
      emailClassNameMod = " form-login__input_email-error",
      emailClassName = emailClassNameEmpty;
    if (this.props.checkError) {
      formClassName = formClassNameEmpty + formClassNameMod;
      emailClassName = emailClassNameEmpty + emailClassNameMod;
    } else {
      formClassName = formClassNameEmpty;
      emailClassName = emailClassNameEmpty;
    }
    return (
      <form className={formClassName} onSubmit={this.props.onClick}>
        <div className="form-login__form-name">Log In</div>
        <input
          className={emailClassName}
          id="email"
          type="email"
          placeholder="E-Mail"
          pattern="([a-z0-9_-]+@[a-z0-9-]+\\.[a-z]{2,6})"
          onChange={this.props.onChangeEmail}
          value={this.props.valueEmail}
          required
          autoFocus
        />
        <input
          className="form-login__input form-login__input_password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={this.props.onChangePassword}
          value={this.props.valuePassword}
        />
        <ErrorNotification
          checkError={this.props.checkError}
          textError={this.props.textError}
        />
        <Button isActive={this.props.isActive} onClick={this.props.onClick} />
      </form>
    );
  }
}

export default Login;
