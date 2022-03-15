import { NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <h1>Misen Task Tracker &#9989;</h1>
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
