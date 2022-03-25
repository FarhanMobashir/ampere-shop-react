import React from "react";

export const Input = ({ required, type, htmlFor, label, onChange }) => {
  return (
    <div className="input-block">
      <label
        className={`label ${required === true ? "label-required" : ""}`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        type={type}
        className="text-input"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
