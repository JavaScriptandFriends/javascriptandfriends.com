import React from "react";

const Card = ({ children }) => (
  <div className="card-wrap">
    <div className="card">{children}</div>
  </div>
);

export default Card;
