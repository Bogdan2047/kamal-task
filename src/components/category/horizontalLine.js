import React from "react";

const HorizontalLine = ({ x1, x2, y }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <svg
        className="lines"
        style={{
          height: 10,
          width: "90%",
        }}
      >
        <line x1={x1} y1={y} x2={x2} y2={y} stroke="#DCDCDC" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default HorizontalLine;
