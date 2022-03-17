import { NavLink } from "react-router-dom";
import loginIcon from "../images/login01.png";
import "../styles/LoginStyle.css";

const Login = () => {
  return (
    <section className="app-login">
      <LoginTitle />
      <LoginForm />
      <LoginOption />
    </section>
  );
};

export default Login;

const LoginTitle = () => {
  return (
    <div className="login-title">
      <img src={loginIcon} alt="login" />
      <h2>Sign in to your account</h2>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className="login-form">
      <div>
        <label>
          <strong>USERNAME:</strong>
        </label>
        <input type="text" />
      </div>
      <div>
        <label>
          <strong>PASSWORD:</strong>
        </label>
        <input type="password" />
      </div>
      <button>Sign In</button>
    </form>
  );
};

const LoginOption = () => {
  return (
    <div className="login-option">
      <NavLink to="/reset_password">Forgot Password</NavLink>
      <p>|</p>
      <NavLink to="/new_user">Register</NavLink>
    </div>
  );
};
