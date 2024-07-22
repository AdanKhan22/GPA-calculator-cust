import React, { useState } from "react";
import Button from "../Buttons/button";
import Display from "../Display/display";
import { validateForm } from "../formhandler.js";
import "./table.css";

export default function Table() {
  let GPA = 0;
  let inputValue = [];
  // State to hold the table rows
  const [rows, setRows] = useState([
    { course: "", creditHours: "", grade: "" },
    { course: "", creditHours: "", grade: "" },
    { course: "", creditHours: "", grade: "" },
  ]);

  const [displayGPA, setDisplayGPA] = useState();

  const [grade, setGrade] = useState();
  // Function to add a new row
  const addRow = () => {
    setRows([...rows, { course: "", creditHours: "", grade: "" }]);
  };

  const handleSumbit = () => {
    if (validateForm(rows)) {
      calGrade();
    } else {
      alert("Fill out all forms");
    }
  };

  const calGrade = () => {
    let totalCreditHours = 0;
    let individualGradePoints = [];
    let totalGradePoints = 0;

    //Calculate Individual Grade Points

    for (let i = 0; i < rows.length; i++) {
      individualGradePoints[i] = rows[i].creditHours * rows[i].grade;
    }
    console.log("GP PINTS", individualGradePoints);

    //Calculate Total Grade Points

    for (let i = 0; i < rows.length; i++) {
      totalGradePoints += individualGradePoints[i];
    }
    console.log("TOTAL PINTS", totalGradePoints);

    //Calculate Total Credit Hours

    for (let i = 0; i < rows.length; i++) {
      let currentCreditHours = parseFloat(rows[i].creditHours) || 0;
      totalCreditHours += currentCreditHours;
    }

    console.log("Total Credit Hours:", totalCreditHours);

    //Calculate GPA
    GPA = totalGradePoints / totalCreditHours;
    setDisplayGPA(GPA);
    console.log("GPA", GPA);
  };

  const handleGradeChange = (index, event) => {
    const handleGrade = [...rows];
    handleGrade[index].grade = event.target.value;
    setGrade(handleGrade);
    console.log(handleGrade);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credit Hours</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="course"
                  placeholder="Course Name"
                  value={row.course}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].course = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="creditHours"
                  placeholder="Credit Hours"
                  value={row.creditHours}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].creditHours = e.target.value;
                    setRows(updatedRows);
                    inputValue = updatedRows;
                  }}
                />
              </td>
              <td>
                <select
                  value={row.grade}
                  onChange={(e) => handleGradeChange(index, e)}
                >
                  <option value="0.0">N</option>
                  <option value="4.0">A</option>
                  <option value="3.67">A-</option>
                  <option value="3.33">B+</option>
                  <option value="3.00">B</option>
                  <option value="2.67">B-</option>
                  <option value="2.33">C+</option>
                  <option value="2.00">C</option>
                  <option value="1.67">C-</option>
                  <option value="1.33">D+</option>
                  <option value="1.00">D</option>
                  <option value="0">F</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="controls">
        <Button onClick={addRow} text="Add" />
        <Button onClick={handleSumbit} text="Calculate" />
        <Button text="Reset" />
      </div>
      <Display text={displayGPA}></Display>
    </div>
  );
}
