import { useState } from "react";
const Tasks = () => {
  // declare state array to contain tasks -- u called it assignment  to avoid interference with the class name
  const [assignments, setAssignments] = useState([]);
  // declare state for input
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        {/* map throw assignments */}
        {assignments.map((assignment, index) => {
          return (
            <div>
              <span>
                {/* ternary assignement checked   */}
                {assignment[1] ? (
                  <input
                    type="checkbox"
                    // set isChecked to false
                    onClick={() => {
                      const newAssignments = [...assignments];
                      newAssignments[index][1] = false;
                      setAssignments(newAssignments);
                    }}
                    Checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    // set isChecked to true
                    onClick={() => {
                      const newAssignments = [...assignments];
                      newAssignments[index][1] = true;
                      setAssignments(newAssignments);
                    }}
                  />
                )}
              </span>
              <span
                // set assignement isChecked apply style
                style={{ "text-decoration": assignment[1] && "line-through" }}
              >
                {assignment}
              </span>
              <button
                // delete assignement
                onClick={() => {
                  let modifiedAssignments = [...assignments];
                  modifiedAssignments.splice(index, 1);
                  setAssignments(modifiedAssignments);
                }}
              >
                *
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="nex task!"
          value={input}
          // input update while typing
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          // add new assignement
          onClick={() => {
            const newAssignments = [...assignments];
            /* newAssignment  is an array : first value content 
            : second element is a boolean related to the assignement if it's done or not
            */
            const newAssignment = [input, false];
            newAssignments.push(newAssignment);

            setAssignments(newAssignments);
          }}
        >
          add task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
