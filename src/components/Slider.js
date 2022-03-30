import React from "react";
export const Slider = ({ min, max, rangeValue, onChange }) => {
  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        class="slider"
        id="myRange"
        onChange={onChange}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>{min + 1}</span>
        <span>{min + 2}</span>
        <span>{min + 3}</span>
        <span>{min + 4}</span>
        <span>{max}</span>
      </div>
    </>
  );
};
