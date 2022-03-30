import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";
export const AuthProvider = ({ children }) => {
  // const [authToken, setAuthToken] = useLocalStorage("authToken", null);
  const [authToken, setAuthToken] = React.useState(null);

  const isAuthenticated = () => {
    // console.log("isAuthenticated: ", authToken);
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const login = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.clear("authToken");
    setAuthToken(null);
  };

  const value = {
    login,
    logout,
    isAuthenticated,
    authToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
