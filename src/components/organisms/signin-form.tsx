import * as React from "react";

interface ISigninFormProps {}

const SigninForm: React.FunctionComponent<ISigninFormProps> = (props) => {
  return (
    <form className="signin_form">
      <h1 className="signin_form-title">Sign in to Sunday School Admin</h1>
      <p>Please use pass-key to gain access to the admin page.</p>
      <input
        className="signin_form-input"
        type="text"
        placeholder="Type pass-key here"
      />
      <div className="error hide">
        <p className="error-msg">Password is incorrect</p>
        <p>Please check and confirm you typed it correctly.</p>
      </div>
      <button className="signin_form-btn" type="submit">
        Sign in
      </button>
      <p className="signin_form-note">
        Having trouble signing in? Please ask the Sunday School Department for
        help.
      </p>
    </form>
  );
};

export default SigninForm;
