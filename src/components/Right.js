import React from "react";
import "./Right.css";

function Right(props) {
  return (
    <div className="right">
      <h4>Deleted</h4>
      {props.list.map((elem) => (
        <p key={elem.id}>{elem.item}</p>
      ))}
    </div>
  );
}

export default Right;
