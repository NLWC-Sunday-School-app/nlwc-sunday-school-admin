import { useContext, useState } from "react";
import { UserContext } from "../../context/auth-context";
import { signin } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { saveUserSessionToLocal } from "../../utils/user-session";

interface ISigninFormProps {}

const SigninForm: React.FunctionComponent<ISigninFormProps> = (props) => {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  return (
    <form className="signin_form">
      <h1 className="signin_form-title">Sign in to Sunday School Admin</h1>
      <p>Please use pass-key to gain access to the admin page.</p>
      <input
        className="signin_form-input"
        type="text"
        placeholder="Type pass-key here"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className={`error ${error ? "" : "hide"}`}>
        <p className="error-msg">Password is incorrect</p>
        <p>Please check and confirm you typed it correctly.</p>
      </div>
      <button
        className="signin_form-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (signin(input)) {
            saveUserSessionToLocal();
            setUser({ access: signin(input) });
            history.push("/");
          } else {
            setError(true);
          }
        }}
      >
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
