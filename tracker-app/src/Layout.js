import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/LayoutStyle.css";

const Layout = () => {
  return (
    <main className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
