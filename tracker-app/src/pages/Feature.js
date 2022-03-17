import { NavLink } from "react-router-dom";
import "../styles/FeatureStyle.css";

const Feature = () => {
  return (
    <section className="app-feature">
      <h3>I am very sorry...</h3>
      <span>The page you are looking for is currently</span>
      <h1>...under construction...</h1>
      <p>Please visit again later</p>
      <NavLink to="/">Go Back</NavLink>
    </section>
  );
};

export default Feature;
