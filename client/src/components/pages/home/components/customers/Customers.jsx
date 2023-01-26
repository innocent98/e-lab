import { Link } from "react-router-dom";
import "./customers.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Customers = ({ setSignup }) => {
  return (
    <div className="customers">
      <div className="wrapper">
        <div className="left">
          <Zoom triggerOnce>
            <img src="/assets/book/customer.png" alt="" className="img-fluid" />
          </Zoom>
        </div>
        <div className="right">
          <Slide direction="right" triggerOnce>
            <h1>10 Million + Customers</h1>
            <p>
              Dolor sit amet, consectetur adipiscing elit. Ornare mauris duis a
              non. Arcu in fermentum mauris est, elementum
            </p>
            <Link to="" onClick={() => setSignup(true)} className="link">
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
      </div>

      <div className="wrapper">
        <div className="follow">
          <Slide triggerOnce>
            <h2>Follow the conversation on social media</h2>
            <p>
              Turpis venenatis sit a augue aliquet fermentum. Tellus, turpis
              tincidunt nibh dictum sit sapien.
            </p>
          </Slide>
        </div>
        <div className="social">
          <Slide direction="right" triggerOnce>
            <img src="assets/book/fb.png" alt="" />
            <img src="assets/book/ig.png" alt="" />
            <img src="assets/book/tw.png" alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Customers;
