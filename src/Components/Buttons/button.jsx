import React from "react";
import "./button.css";

export default function button({ onClick, text }) {
  return (
    <div className="wrapper-button">
      <button onClick={onClick}>
        <span className="span-mother">
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </span>
        <span className="span-mother2">
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </span>
      </button>
    </div>
  );
}
