import React from "react";

export const Switch = () => {
  return (
    <>
      <div className="toggle">
        <input type="checkbox" id="btn" />
        <label htmlFor="btn">
          <span className="track">
            <span className="txt" />
          </span>
          <span className="thumb">|||</span>
        </label>
      </div>
    </>
  );
};
