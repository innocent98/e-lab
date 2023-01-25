import "./home.scss";
import { Link } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Choose from "./components/choose/Choose";
import Collections from "./components/collections/Collections";
import Saying from "./components/saying/Saying";
import Customers from "./components/customers/Customers";
import Footer from "../../footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="top">
        <div className="logo">eLibrary</div>
        <div className="button">
          <Link to="/login" className="link">
            <div className="loginBtn">Login</div>
          </Link>
          <Link to="/register" className="link">
            <div className="signupBtn">Sign up</div>
          </Link>
        </div>
      </div>

      <Intro />
      <Choose />
      <Collections />
      <Saying />
      <Customers />
      <Footer />
    </div>
  );
}
