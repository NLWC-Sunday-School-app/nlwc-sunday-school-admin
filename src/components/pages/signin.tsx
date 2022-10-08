import * as React from "react";
import SigninForm from "../organisms/signin-form";
import Logo from "../../assets/logo.png";


interface ISigninPageProps {}

const SigninPage: React.FunctionComponent<ISigninPageProps> = (props) => {
  return (
    <div className="signin">
      <img className="logo" src={Logo} alt="Logo" />
      <SigninForm></SigninForm>
    </div>
  );
};

export default SigninPage;
