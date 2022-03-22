import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginIcon from "../images/login01.png";
import "../styles/LoginStyle.css";
import { AuthContext } from "../context/UserContext";

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
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const { state, dispatch } = React.useContext(AuthContext);
  const [formData, setFormData] = useState(initialValues);

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5300/user/user_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.user.accessToken,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOGGED_IN", payload: data });
        setFormData(initialValues);
        navigate("/welcome");
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label>
          <strong>E-MAIL ADDRESS:</strong>
        </label>
        <input
          type="text"
          name="email"
          value={formData.username}
          onChange={handleInput}
          autoComplete="off"
        />
      </div>
      <div>
        <label>
          <strong>PASSWORD:</strong>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
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
