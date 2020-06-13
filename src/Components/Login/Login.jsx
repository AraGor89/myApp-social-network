import React from "react";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Input } from "../Common/Preloader/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "./../../utils/validators/validators";
import { login } from "../../Redux/auth-reduser";
import style from "../Common/Preloader/FormsControls/FormsControl.module.css";

const maxLength10 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required, maxLength10]}
          type="password"
        />
      </div>
      <div>
        <span>remember me</span>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
      </div>
      {props.captchaUrl && <img src={props.captchaUrl} />}
      {props.captchaUrl && (
        <Field
          placeholder={"symbols from image"}
          name={"captcha"}
          validate={[required]}
          component={Input}
        />
      )}
      {props.error && (
        <div className={style.formSummaryError}>{props.error} </div>
      )}

      <div>
        <button> Enter </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
