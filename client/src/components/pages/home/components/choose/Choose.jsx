import { Link } from "react-router-dom";
import "./choose.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Choose = ({ setSignup }) => {
  return (
    <div className="choose">
        <img src="assets/book/vector.png" alt="" className="vector" />
      <h1>
        <Zoom triggerOnce>Key reasons to choose us over others</Zoom>
      </h1>
      <div className="wrapper">
        <Slide direction="left" triggerOnce>
          <div className="box">
            <p>
              Our e-book store app is dedicated to providing a convenient and
              trustworthy platform for readers to purchase and enjoy their
              favorite books.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>

        <Slide direction="up" triggerOnce>
          <div className="box">
            <p>
              In addition to our anti-plagiarism policy, we have also made it a
              priority to provide easy accessibility to books from user's
              favorite publishers.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="box">
            <p>
              We offer personalized recommendations to users based on their
              reading history and preferences. This include tailored booklists,
              notifications about new releases from their favorite authors, and
              more.
            </p>
            <Link to="" className="link">
              Learn more
            </Link>
          </div>
        </Slide>
      </div>

      {/* <Link to="" onClick={() => setSignup(true)} className="link">
        <div className="signupBtn">Sign Up</div>
      </Link> */}
    </div>
  );
};

export default Choose;
