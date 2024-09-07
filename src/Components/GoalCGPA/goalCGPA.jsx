import React, { useState } from "react";
import "./goalCGPA.css";
import Button from "../Buttons/button";
import { validateForm } from "../formhandler.js";

export default function goalCGPA() {
  const [currentGPA, setCurrentGPA] = useState("");
  const [targetGPA, setTargetGPA] = useState("");
  const [currentCredits, setCurrentCredits] = useState("");
  const [additionalCredits, setAdditionalCredits] = useState("");
  const [futureGPA, setfutureGPA] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "currentGPA":
        setCurrentGPA(value);
        break;
      case "targetGPA":
        setTargetGPA(value);
        break;
      case "currentCredits":
        setCurrentCredits(value);
        break;
      case "additionalCredits":
        setAdditionalCredits(value);
        break;

      default:
        break;
    }
  };

  const calculateCGPA = () => {
    const checkForm = [
      currentGPA,
      targetGPA,
      currentCredits,
      additionalCredits,
    ];

    if (validateForm(null, checkForm)) {
      const currentGPAFloat = parseFloat(currentGPA) || 0;
      const targetGPAFloat = parseFloat(targetGPA) || 0;
      const currentCreditsFloat = parseFloat(currentCredits) || 0;
      const additionalCreditsFloat = parseFloat(additionalCredits) || 0;

      const numerator =
        targetGPAFloat * (currentCreditsFloat + additionalCreditsFloat) -
        currentGPAFloat * currentCreditsFloat;
      const futureGPA = numerator / additionalCreditsFloat;
      const futureGPAFloat = parseFloat(futureGPA.toFixed(2));
      setfutureGPA(futureGPAFloat);
    } else {
      alert("Fill out all forms");
    }
  };

  return (
    <section>
      <div className="section2-text">
        <h1>CGPA Planning Calculator</h1>
        <p>
          The calculator can be used to determine the minimum GPA required in
          future courses to raise CGPA to a desired level or maintain the CGPA
          above a certain level.
        </p>
      </div>

      <div className="list-options">
        <ul>
          <li className="input-group">
            <label htmlFor="currentGPA">Current CGPA</label>
            <input
              id="currentGPA"
              name="currentGPA"
              type="number"
              min="0"
              className="input-field"
              value={currentGPA}
              onChange={handleInputChange}
            />
          </li>
          <li className="input-group">
            <label htmlFor="targetGPA">Target CGPA</label>
            <input
              id="targetGPA"
              name="targetGPA"
              type="number"
              min="0"
              className="input-field"
              value={targetGPA}
              onChange={handleInputChange}
            />
          </li>
          <li className="input-group">
            <label htmlFor="currentCredits">Current Total Credit Hours</label>
            <input
              id="currentCredits"
              name="currentCredits"
              type="number"
              min="0"
              className="input-field"
              value={currentCredits}
              onChange={handleInputChange}
            />
          </li>
          <li className="input-group">
            <label htmlFor="additionalCredits">Additional Credit Hours</label>
            <input
              id="additionalCredits"
              name="additionalCredits"
              type="number"
              min="0"
              className="input-field"
              value={additionalCredits}
              onChange={handleInputChange}
            />
          </li>
        </ul>
        <Button text="Calculate" onClick={calculateCGPA}></Button>
        <div className="displayGGPA">
          <h3>
            Your Goal GPA is <b className="GPA-display-number">{futureGPA}</b>
          </h3>
        </div>
      </div>
    </section>
  );
}
