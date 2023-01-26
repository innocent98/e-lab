import { Link } from "react-router-dom";
import "./collections.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Collections = () => {
  return (
    <div className="collections">
      <h1>
        <Zoom triggerOnce>Browse our collection of books</Zoom>
      </h1>
      <Slide triggerOnce>
        <div className="wrapper">
          <div className="img">
            <img
              src="assets/book/1.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="img">
            <img
              src="assets/book/2.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="img">
            <img
              src="assets/book/3.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="img">
            <img src="assets/book/4.jpeg" alt="" className="img-fluid" />
          </div>
          <div className="img">
            <img
              src="assets/book/5.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </Slide>

      <Link to="" className="link">
        Learn More
      </Link>
    </div>
  );
};

export default Collections;
