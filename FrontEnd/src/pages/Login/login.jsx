import React from "react";
import { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <img src={assets.logo} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2 className="login-header">{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            placeholder="username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email address"
          className="form-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign up" ? "Create acoount" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account ?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign up")}>click here</span>
            </p>
          )}
          {currState === "Login" ? (
            <p className="login-toggle">
              Forgot Password ?{" "}
              <span onClick={() => resetPass(email)}>reset here</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
