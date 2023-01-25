import { Link } from "react-router-dom";
import "./intro.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <div className="left">
          <Slide direction="left" triggerOnce>
            <h1>Books are a uniquely portable magic</h1>
            <p>
              Browse the collection of our top best and catchy books that would
              enhance your knowledge and widen your horizon
            </p>
            <Link to="/register" className="link">
              <div className="signupBtn">Sign up</div>
            </Link>
            <div className="app">
              <h4>App coming soon...</h4>
              <div className="imgs">
                <img src="/assets/book/appstore.png" alt="" />
                <img src="/assets/book/playstore.png" alt="" />
              </div>
            </div>
          </Slide>
        </div>
        <div className="right">
          <Zoom className="right" triggerOnce>
            <img src="/assets/book/unsplash.png" alt="" className="img-fluid" />
          </Zoom>
        </div>
      </div>

      <div className="wrapper">
        <div className="mirror">
          <Slide direction="left" triggerOnce>
            Books are mirrors: You only see in them what you already have inside
            you.
          </Slide>
        </div>
        <div className="bookGroup">
          <Slide direction="right" triggerOnce>
            <img src="assets/book/book-group.png" alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Intro;
