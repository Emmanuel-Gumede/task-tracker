import "../styles/HomeStyle.css";

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
      <p>"Keep track of</p>
      <p>all your important tasks</p>
      <p>and deadlines..."</p>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="home-content">
      <h2 className="home-content-title">Benefits:</h2>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
