import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/LayoutStyle.css";

const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <main className="app-container">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
