import "../styles/HomeStyle.css";
import logo from "../images/logo01.png";
import leftQuote from "../images/quote01.png";
import rightQuote from "../images/quote02.png";

const Home = () => {
  return (
    <section className="app-home">
      <HeroSection />
      <HomeContent />
    </section>
  );
};

export default Home;

const HeroSection = () => {
  return (
    <div className="home-hero">
      <p>
        <img src={leftQuote} alt="quote" /> Keep track of
      </p>
      <p>all your important tasks</p>
      <p>
        and deadlines...
        <img src={rightQuote} alt="quote" />
      </p>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="home-content">
      <div>
        <img src={logo} alt="check" />
        <h1>Organize Work</h1>
        <span className="home-content-dot"></span>
      </div>
      <div>
        <img src={logo} alt="check" />
        <h1>Collaborate Effectively</h1>
        <span className="home-content-dot"></span>
      </div>
      <div>
        <img src={logo} alt="check" />
        <h1>Prioritize Tasks</h1>
        <span className="home-content-dot"></span>
      </div>
    </div>
  );
};
