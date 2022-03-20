import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo01.png";
import "../styles/HeaderStyle.css";
import { AuthContext } from "../context/UserContext";

const date = new Date(Date.now());
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Header = () => {
  const { state } = React.useContext(AuthContext);
  return (
    <section className="app-header">
      <Logo />
      {state.isLoggedIn ? <HeaderMenu /> : <HeaderBanner />}
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
          <h1>
            <strong>OKUHLE</strong>
          </h1>
          <h3>Task Tracker</h3>
        </div>
      </NavLink>
    </div>
  );
};

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <h2>No. 1 Task Management Tool</h2>
    </div>
  );
};

const HeaderMenu = () => {
  return (
    <nav className="header-nav">
      <ul>
        <li> Home </li>
        <li> Tasks </li>
        <li> Reports </li>
        <li> Help </li>
      </ul>
    </nav>
  );
};

const LoginBtn = () => {
  return (
    <div className="header-login">
      <NavLink to="/login" className="header-login-btn">
        <span>Sign In</span>
      </NavLink>
      <div className="header-date">
        <strong>{`${weekDays[date.getDay()]}`}</strong>
        <br /> {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
      </div>
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
      <div className="header-date">
        <strong>{`${weekDays[date.getDay()]}`}</strong>
        <br /> {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
      </div>
    </div>
  );
};
