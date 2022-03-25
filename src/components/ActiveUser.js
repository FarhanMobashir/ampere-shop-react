import { AuthContext } from "../contexts/AuthContex";
import React from "react";

export const ActiveUser = () => {
  const { logout } = React.useContext(AuthContext);
  return (
    <div>
      <h1>User is active</h1>
      <button className="btn btn-primary" onClick={() => logout()}>
        LOGOUT
      </button>
    </div>
  );
};
