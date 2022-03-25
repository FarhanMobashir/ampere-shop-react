import React from "react";

export const RadioButton = ({ label, value, name, onChange }) => {
  return (
    <label className="radio-checkbox-label pointer" htmlFor={value}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
