import React, { useState } from "react";
import Button from "../Buttons/button";
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
  const [displayCredits, setdisplayCredits] = useState(0);
  const [grade, setGrade] = useState();

  // window.onload = function () {
  //   let cachedValues = [];

  //   rows.map((row) => {});
  //   cachedValues = localStorage.getItem("creditHours"); //Key as parameter

  //   console.log(cachedValues);
  // };

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
    //Calculate Total Grade Points

    for (let i = 0; i < rows.length; i++) {
      totalGradePoints += individualGradePoints[i];
    }

    //Calculate Total Credit Hours

    for (let i = 0; i < rows.length; i++) {
      let currentCreditHours = parseFloat(rows[i].creditHours) || 0;
      totalCreditHours += currentCreditHours;
    }

    //Calculate GPA
    GPA = totalGradePoints / totalCreditHours;
    setDisplayGPA(GPA.toFixed(2));
    setdisplayCredits(totalCreditHours);
  };

  // const cacheInput = (e) => {
  //   let cachedInput = [];
  //   cachedInput.push(e.target.name, e.target.value);
  //   // localStorage.setItem(e.target.name, e.target.value);
  //   console.log(cachedInput);
  // };

  const handleGradeChange = (index, event) => {
    const handleGrade = [...rows];
    handleGrade[index].grade = event.target.value;
    setGrade(handleGrade);
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
                  className="input-fields-text"
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
                  className="input-fields-number"
                  type="number"
                  min="0"
                  max="10"
                  name="creditHours"
                  placeholder="Credit Hours"
                  // onInput={cacheInput}
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
                  // onInput={cacheInput}
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
        <Button
          text="Reset"
          onClick={() => {
            setRows([{ course: "", creditHours: "", grade: "" }]);
          }}
        />
      </div>

      <h3>
        Total Credits <b className="GPA-display-credits">{displayCredits}</b>
      </h3>

      <h3>
        Your CGPA is <b className="GPA-display-number">{displayGPA}</b>
      </h3>
    </div>
  );
}
