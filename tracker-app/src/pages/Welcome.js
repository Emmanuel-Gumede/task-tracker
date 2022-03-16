import logoSign from "../images/logo01.png";
import "../styles/WelcomeStyle.css";

const Welcome = () => {
  return (
    <section className="app-welcome">
      <img src={logoSign} alt="logo" />
      <h1>Welcome</h1>
      <h2>Username</h2>
      <p>You have not created tasks in your profile.</p>
      <p>Click the button below to create your first task.</p>
      <button className="welcome-task">Create a Task</button>
    </section>
  );
};

export default Welcome;
