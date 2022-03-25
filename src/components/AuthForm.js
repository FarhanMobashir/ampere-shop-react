import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import React from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContex";
import { useToggle } from "../hooks/useToggle";
import { useNavigate } from "react-router-dom";

export const Form = ({ onSubmit, name }) => {
  return (
    <div className="login-signup-card">
      <div className="tabs-container">
        <h1
          className={`tabs tx-center pointer`}
          onClick={() => console.log("Login clicked")}
        >
          LOGIN
        </h1>
        <h1
          className={`tabs tx-center pointer tabs-active`}
          onClick={() => console.log("Signup clicked")}
        >
          SIGN UP
        </h1>
      </div>
      <form action="" className="auth-form" onSubmit={submitFormHandler}>
        <Input
          label="Email"
          required={true}
          type="email"
          htmlFor="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          required={true}
          type="password"
          htmlFor="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex-between-container">
          <Checkbox
            label="Remember me"
            value="remember-me"
            name="remember-me"
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <p className="tx-18 tx-underline blue-4 pointer">Forgot password</p>
        </div>
        <div className="flex-between-container">
          <button type="submit" className="btn btn-primary btn-md mt-20 wp-100">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export const AuthForm = ({}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onLogin = useToggle(false);
  const navigate = useNavigate();

  const { login } = React.useContext(AuthContext);

  function signUp(e) {
    e.preventDefault();
    axios.post("/api/auth/signup", { email, password }).then((res) => {
      login(res.data.encodedToken);
    });
    navigate("/");
  }

  function logIn(e) {
    e.preventDefault();
    axios.post("/api/auth/login", { email, password }).then((res) => {
      login(res.data.encodedToken);
      navigate("/");
    });
  }

  return (
    <div id="auth-main-container">
      <div className="page-title-wrapper tx-center mv-20">
        <h1 className="h5 black-6">Login | Signup</h1>
      </div>
      <div className="login-signup-card">
        <div className="tabs-container">
          <h1
            className={`tabs tx-center pointer ${
              !onLogin.on ? "tabs-active" : ""
            }`}
            onClick={() => onLogin.toggle()}
          >
            LOGIN
          </h1>
          <h1
            className={`tabs tx-center pointer ${
              onLogin.on ? "tabs-active" : ""
            }`}
            onClick={() => onLogin.toggle()}
          >
            SIGN UP
          </h1>
        </div>
        <form
          action=""
          className="auth-form"
          onSubmit={!onLogin.on ? logIn : signUp}
        >
          <Input
            label="Email"
            required={true}
            type="email"
            htmlFor="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            required={true}
            type="password"
            htmlFor="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex-between-container">
            <Checkbox
              label="Remember me"
              value="remember-me"
              name="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p className="tx-18 tx-underline blue-4 pointer">Forgot password</p>
          </div>
          <div className="flex-between-container">
            <button
              type="submit"
              className="btn btn-primary btn-md mt-20 wp-100"
            >
              {onLogin.on ? "SIGN UP" : "LOGIN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
