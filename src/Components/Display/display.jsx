import React from "react";
import "./display.css";

export default function display(prop) {
  return (
    <div>
      <h2>Your GPA is </h2>
      <h2>{prop.text}</h2>
    </div>
  );
}
