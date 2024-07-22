import React, { useState } from "react";
import "./goalCGPA.css";
import Button from "../Buttons/button";
export default function goalCGPA() {
  const [currentGPA, setCurrentGPA] = useState("");
  const [targetGPA, setTargetGPA] = useState("");
  const [currentCredits, setCurrentCredits] = useState("");
  const [additionalCredits, setAdditionalCredits] = useState("");

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
    // console.log("Cuurent Gpa", currentGPA);
    // console.log("Cuurent Gpa", targetGPA);
    // console.log("Cuurent Gpa", currentCredits);
    // console.log("Cuurent Gpa", additionalCredits);

    // Parse input values to ensure they are numbers
    const currentGPAFloat = parseFloat(currentGPA) || 0;
    const targetGPAFloat = parseFloat(targetGPA) || 0;
    const currentCreditsFloat = parseFloat(currentCredits) || 0;
    const additionalCreditsFloat = parseFloat(additionalCredits) || 0;

    // Calculate the numerator and denominator
    const numerator =
      targetGPAFloat * (currentCreditsFloat + additionalCreditsFloat) -
      currentGPAFloat * currentCreditsFloat;
    const futureGPA = numerator / additionalCreditsFloat;

    console.log("Needed GPA for next semester:", futureGPA.toFixed(2));
  };

  return (
    <>
      <h2>GPA Planning Calculator</h2>
      <p>
        The calculator can be used to determine the minimum GPA required in
        future courses to raise GPA to a desired level or maintain the GPA above
        a certain level.
      </p>
      {/* Add "type" in each input tag equal to numbers or
      something */}
      <div>
        <ul>
          Current GPA{" "}
          <input
            name="currentGPA"
            value={currentGPA}
            onChange={handleInputChange}
          ></input>
        </ul>
        <ul>
          Target GPA{" "}
          <input
            name="targetGPA"
            value={targetGPA}
            onChange={handleInputChange}
          ></input>
        </ul>
        <ul>
          Current Credits
          <input
            name="currentCredits"
            value={currentCredits}
            onChange={handleInputChange}
          ></input>
        </ul>
        <ul>
          Additional Credits
          <input
            name="additionalCredits"
            value={additionalCredits}
            onChange={handleInputChange}
          ></input>
        </ul>
      </div>
      <Button text="Calculate" onClick={calculateCGPA}></Button>
    </>
  );
}
