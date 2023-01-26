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

export default function Home() {
  const [signup, setSignup] = useState(false)

  return (
    <div className={"home " + (signup && "active")}>
      <div className="top">
        <div className="logo">eLibrary</div>
        <div className="button">
          <Link to="/login" className="link">
            <div className="loginBtn">Login</div>
          </Link>
          <Link to="" className="link" onClick={()=>setSignup(true)}>
            <div className="signupBtn">Sign up</div>
          </Link>
        </div>
      </div>

      {signup && <RegistrationOptions signup={signup} setSignup={setSignup} />}

      <Intro setSignup={setSignup} />
      <Choose setSignup={setSignup} />
      <Collections />
      <Saying />
      <Customers setSignup={setSignup} />
      <Footer />
    </div>
  );
}
