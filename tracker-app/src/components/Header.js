import { NavLink } from "react-router-dom";
import logoImage from "../images/logo01.png";
import "../styles/HeaderStyle.css";

const Header = () => {
  return (
    <section className="app-header">
      <Logo />
      <LoginBtn />
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
          <h1>MISEN</h1>
          <h3>Task Tracker</h3>
        </div>
      </NavLink>
    </div>
  );
};

const LoginBtn = () => {
  return (
    <NavLink to="/login" className="header-login">
      <div>Sign In</div>
    </NavLink>
  );
};
