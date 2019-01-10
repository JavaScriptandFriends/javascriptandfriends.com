import React from "react";
import "./card.css";

const Card = ({ children }) => (
  <div className="card-wrap">
    <div className="card">{children}</div>
  </div>
);

export default Card;
