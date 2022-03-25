import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import React from "react";

export const AuthForm = ({}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div id="auth-main-container">
      <div className="page-title-wrapper tx-center mv-20">
        <h1 className="h5 black-6">Login | Signup</h1>
      </div>
      <div className="login-signup-card">
        <div className="tabs-container">
          <h1
            className={`tabs tx-center pointer`}
            onClick={() => console.log("Login clicked")}
          >
            LOG IN
          </h1>
          <h1
            className={`tabs tx-center pointer tabs-active`}
            onClick={() => console.log("Signup clicked")}
          >
            SIGN UP
          </h1>
        </div>
        <form action="" className="auth-form">
          <Input
            label="Email"
            required={true}
            type="email"
            htmlFor="email"
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            label="Password"
            required={true}
            type="password"
            htmlFor="password"
            onChange={(e) => console.log(e.target.value)}
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
              <button className="btn btn-primary btn-md mt-20 wp-100">
                SIGN UP
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};
