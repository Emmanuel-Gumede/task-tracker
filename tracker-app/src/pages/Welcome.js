import React from "react";
import logoSign from "../images/logo01.png";
import "../styles/WelcomeStyle.css";
import { AuthContext } from "../App";

const Welcome = () => {
  const { state } = React.useContext(AuthContext);
  return (
    <section className="app-welcome">
      <img src={logoSign} alt="logo" />
      <h1>Welcome</h1>
      <h2> {state.userName} </h2>
      <p>You have not created tasks in your profile.</p>
      <p>Click the button below to create your first task.</p>
      <button className="welcome-task">Create a Task</button>
    </section>
  );
};

export default Welcome;
