import React, { useState } from "react";
import showPwdImg from "./assets/showpd.svg";
import hidePwdImg from "./assets/hidepd.svg";
import "./login.scss";
import logo from "./assets/lg.png";
import { Context } from "../../../context/Context";
import { useContext, useRef } from "react";
import { userRequest } from "../../../requestMethod";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await userRequest.post("/_auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      setIsLoading(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data);
      setIsLoading(false);
    }
  };

  return (
    <div className="head-l">
      <div className="top">
        <div className="logo">
          <img className="lib-lg" src={logo} alt="" />
          <span className="txt-lg">
            <b>eLibrary</b>
          </span>
        </div>
      </div>

      <div className="container">
        <p className="login">
          <b>Login To Your Account</b>
        </p>
        <form
          className="row g-3"
          onSubmit={handleSubmit}
          style={{ left: "-4px", top: "-10px" }}
        >
          <div className="col-md-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              ref={email}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              name="pwd"
              type={isRevealPwd ? "text" : "password"}
              className="form-control"
              id="inputPassword4"
              ref={password}
              required
            />
            <img
              className="l-sp"
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              alt=""
              style={{ top: "-30px" }}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </div>

          <div className="col-md-3">
            <button
              type="submit"
              className="login-button btn-primary"
              disabled={isFetching || isLoading}
            >
              {isLoading ? "Please wait...." : "Login"}
            </button>
            <div className="member">
              Not a publisher?{" "}
              <span className="member-r">
                <a href="/register">Register</a>
              </span>
            </div>
            <div className="member">
              {" "}
              <span className="member-r">
                <a href="/register">Forgot password?</a>
              </span>
            </div>
          </div>
        </form>
        {error && (
          <span
            style={{ color: "red", textAlign: "center", marginTop: "20px" }}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
