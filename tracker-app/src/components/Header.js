import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo01.png";
import "../styles/HeaderStyle.css";
import { AuthContext } from "../App";

const Header = () => {
  const { state } = React.useContext(AuthContext);
  console.log(state.isLoggedIn);
  return (
    <section className="app-header">
      <Logo />
      <HeadBanner />
      {state.isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </section>
  );
};

export default Header;

const Logo = () => {
  return (
    <div className="header-logo">
      <NavLink to="/" className="logo-brand">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div>
          <h1>OKUHLE</h1>
          <h3>Task Tracker</h3>
        </div>
      </NavLink>
    </div>
  );
};

const HeadBanner = () => {
  return (
    <div className="header-banner">
      <h2>No. 1 Task Management Tool</h2>
    </div>
  );
};

const LoginBtn = () => {
  const date = new Date(Date.now());
  return (
    <div className="header-login">
      <NavLink to="/login" className="header-login-btn">
        <span>Sign In</span>
      </NavLink>
      <div className="header-date">{date.toDateString()}</div>
    </div>
  );
};

const LogoutBtn = () => {
  const { dispatch } = React.useContext(AuthContext);
  const date = new Date(Date.now());
  const handleClick = () => {
    dispatch({ type: "LOGGED_OUT", payload: "" });
  };
  return (
    <div className="header-login">
      <NavLink to="/" className="header-login-btn" onClick={handleClick}>
        <span>Sign Out</span>
      </NavLink>
      <div className="header-date">{date.toDateString()}</div>
    </div>
  );
};
