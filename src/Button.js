import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={`/Details/${props.cardId}`} className="details-btn">
      More details
    </Link>
  );
}
