/* eslint-disable react/prop-types */
import React from "react";

function Card({ title, children }) {
  return (
    <div className="card shadow mb-4" style={{ marginBottom: "30px" }}>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div
        className="card-body"
        style={{ position: "relative", height: "100%", paddingBottom: "20px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
