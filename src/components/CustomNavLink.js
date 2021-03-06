import React from "react";
import { NavLink } from "react-router-dom";

const defaultInActiveStyle = {
  background: "none",
  textDecoration: "none",
  color: "black",
};

const defaultActiveStyle = {
  background: "none",
  textDecoration: "none",
  color: "black",
};

export const CustomedNavLink = ({
  children,
  to,
  activeStyle,
  inActiveStyle,
}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive
          ? { ...defaultActiveStyle, ...activeStyle }
          : { ...defaultInActiveStyle, ...inActiveStyle }
      }
    >
      {children}
    </NavLink>
  );
};
