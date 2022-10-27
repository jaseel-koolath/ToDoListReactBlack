import React from "react";
import "./Left.css";

function Left(props) {
  return (
    <div className="left">
      <h4>Completed</h4>
      {props.list.map((elem) => (
        <p key={elem.id}>{elem.item}</p>
      ))}
    </div>
  );
}

export default Left;
