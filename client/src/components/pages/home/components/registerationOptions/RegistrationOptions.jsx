import "./options.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegistrationOptions = ({ setSignup }) => {
  const [waitList, setWaitList] = useState(false);

  return (
    <div className="options">
      <div className="option">
        {waitList ? (
          <span className="material-icons icon" onClick={() => setWaitList(false)}>
            arrow_back
          </span>
        ) : (
          <span className="material-icons icon" onClick={() => setSignup(false)}>
            close
          </span>
        )}
        {!waitList && (
          <>
            <p>Choose a registration that best describe you</p>
            <h3>Start Your Registration Seamlessly With Us</h3>
            <Link to="/register" className="link">
              Publisher
            </Link>
            <Link to="" className="link" onClick={() => setWaitList(true)}>
              Reader
            </Link>
          </>
        )}

        {waitList && (
          <>
            <p>Be the first to know when we launch</p>
            <h3>Join Our Wait List</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <button
              className="link"
              onClick={() =>
                alert(
                  "Thank you joining us, we'll notify you first when we launch"
                )
              }
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationOptions;
