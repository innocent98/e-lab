import "./home.scss";
import { Link } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Choose from "./components/choose/Choose";
import Collections from "./components/collections/Collections";
import Saying from "./components/saying/Saying";
import Customers from "./components/customers/Customers";
import Footer from "../../footer/Footer";
import RegistrationOptions from "./components/registerationOptions/RegistrationOptions";
import { useState } from "react";
import Contact from "./components/contact/Contact";

export default function Home() {
  const [signup, setSignup] = useState(false);

  return (
    <div className={"home " + (signup && "active")}>
      {signup && <RegistrationOptions signup={signup} setSignup={setSignup} />}
      <div className="components">
        <div className="top">
          <div className="logo">eLibrary</div>
          <div className="button">
            <Link to="/login" className="link">
              <div className="loginBtn">Login</div>
            </Link>
            <Link to="" className="link" onClick={() => setSignup(true)}>
              <div className="signupBtn">Sign up</div>
            </Link>
          </div>
        </div>
        <Intro setSignup={setSignup} />
        <Collections />
        <Choose setSignup={setSignup} />
        {/* <Saying /> */}
        {/* <Customers setSignup={setSignup} /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
