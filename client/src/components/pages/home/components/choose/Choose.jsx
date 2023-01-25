import { Link } from "react-router-dom";
import "./choose.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Choose = () => {
  return (
    <div className="choose">
      <h1>
        <Zoom triggerOnce>Key reasons to choose us over others</Zoom>
      </h1>
      <div className="wrapper">
        <Slide direction="left" triggerOnce>
          <div className="box">
            <p>
              Dolor sit amet, consectetur adipiscing elit. Ornare mauris duis a
              non. Arcu in fermentum mauris est, elementum vel.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>

        <Slide direction="up" triggerOnce>
          <div className="box">
            <p>
              Dolor sit amet, consectetur adipiscing elit. Ornare mauris duis a
              non. Arcu in fermentum mauris est, elementum vel.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="box">
            <p>
              Dolor sit amet, consectetur adipiscing elit. Ornare mauris duis a
              non. Arcu in fermentum mauris est, elementum vel.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>
      </div>

      <Link to="/register" className="link">
        <div className="signupBtn">Sign Up</div>
      </Link>
    </div>
  );
};

export default Choose;
