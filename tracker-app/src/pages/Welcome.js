import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logoSign from "../images/logo01.png";
import "../styles/WelcomeStyle.css";
import { AuthContext } from "../context/UserContext";

const Welcome = () => {
  const { state } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tasks");
  };

  return state.tasks !== undefined ? (
    <Navigate to="/tasks" />
  ) : (
    <section className="app-welcome">
      <img src={logoSign} alt="logo" />
      <h1>Welcome</h1>
      <h2> {state.username} </h2>
      <p>You have not created tasks in your profile.</p>
      <p>Click the button below to create your first task.</p>
      <button className="welcome-task" onClick={handleClick}>
        Create a Task
      </button>
    </section>
  );
};

export default Welcome;
