import { useState } from "react";
import Task from "./Task";

const Tasks = () => {
  // declare state array to contain tasks -- u called it assignment  to avoid interference with the class name
  const [assignments, setAssignments] = useState([]);
  // declare state for input
  const [input, setInput] = useState("");

  const handleClickAddAssignement = () => {
    const newAssignments = [...assignments];
    /* newAssignment  is an array : first value content 
    : second element is a boolean related to the assignement if it's done or not
    */
    const newAssignment = { content: input, checked: false };
    newAssignments.push(newAssignment);

    setAssignments(newAssignments);
    // reset input
    setInput("");
  };
  // checked assignments

  return (
    <div className="tasks container">
      <div className="assignements">
        {/* map throw assignments  */}
        {assignments.map((assignment, index) => {
          return (
            !assignment.checked && (
              <Task
                assignment={assignment}
                index={index}
                assignments={assignments}
                setAssignments={setAssignments}
              />
            )
          );
        })}
        {assignments.map((assignment, index) => {
          return (
            assignment.checked && (
              <Task
                assignment={assignment}
                index={index}
                assignments={assignments}
                setAssignments={setAssignments}
              />
            )
          );
        })}
      </div>
      {/* add assignement section */}
      <div className="add-assignements">
        <input
          id="input-field"
          type="text"
          placeholder="nex task!"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          // add new assignement
          onClick={handleClickAddAssignement}
        >
          add task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
