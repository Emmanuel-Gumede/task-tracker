import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import loginIcon from "../images/login01.png";
import "../styles/RegisterStyle.css";
import { AuthContext } from "../context/UserContext";

const Register = () => {
  return (
    <section className="app-register">
      <RegisterTitle />
      <RegisterForm />
      <RegisterOption />
    </section>
  );
};

export default Register;

const RegisterTitle = () => {
  return (
    <div className="register-title">
      <img src={loginIcon} alt="register" />
      <h2>Register a new account</h2>
    </div>
  );
};

const RegisterForm = () => {
  const { dispatch } = React.useContext(AuthContext);
  let navigate = useNavigate();
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPwd: "",
  };

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

    fetch("http://127.0.0.1:5300/user/user_register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">
          <strong>FULL NAME:</strong>
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInput}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="email">
          <strong>E-MAIL ADDRESS:</strong>
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInput}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="password">
          <strong>PASSWORD:</strong>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="confirmPwd">
          <strong>CONFIRM PASSWORD:</strong>
        </label>
        <input
          type="password"
          name="confirmPwd"
          value={formData.confirmPwd}
          onChange={handleInput}
        />
      </div>
      <button>Register</button>
    </form>
  );
};

const RegisterOption = () => {
  return (
    <div className="register-option">
      <p>
        By registering, you agree to Misen <NavLink to="/feature">Terms of Use</NavLink>.
      </p>
      <p>
        Read the Privacy Policy <NavLink to="/feature">here</NavLink>.
      </p>
    </div>
  );
};
