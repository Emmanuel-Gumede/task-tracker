import "../styles/FooterStyle.css";

const Footer = () => {
  return (
    <section className="app-footer">
      <FootNote />
    </section>
  );
};

export default Footer;

const FootNote = () => {
  return (
    <div className="footer-dev">
      <h3>Developed by:</h3>
      <p>Emmanuel Gumede</p>
    </div>
  );
};
