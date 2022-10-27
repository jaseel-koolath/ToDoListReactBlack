import React from "react";
import { useState } from "react";
import "./Active.css";

function Active(props) {
  const [word, setWord] = useState("");
  function handleClick(event) {
    setWord(event.target.value);
  }
  console.log(word);
  return (
    <div className="active">
      <input
        type="text"
        className="text-box"
        value={word}
        onChange={handleClick}
      />
      <i
        className="fa-solid fa-plus add"
        onClick={() => props.changeToList(word, "+", Date.now())}
      ></i>
      {props.list.map((elem) => (
        <div className="item" key={elem.id}>
          <input
            type="checkbox"
            onChange={() => props.changeToList(word, "*", elem.id)}
          />
          <span className="checkmark"></span>
          <p>{elem.item}</p>
          <i
            className="fa-regular fa-square-minus del"
            onClick={() => props.changeToList(word, "-", elem.id)}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Active;
