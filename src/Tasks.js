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
            <div key={index}>
              <span>
                {/* ternary assignement checked   */}
                {/* {assignment.checked ? ( */}
                <input
                  type="checkbox"
                  // set isChecked to false
                  onClick={() => {
                    const newAssignments = [...assignments];
                    if (assignment.checked) {
                      newAssignments[index].checked = false;
                    } else {
                      newAssignments[index].checked = true;
                    }

                    setAssignments(newAssignments);
                  }}
                  style={{
                    checked: assignment.checked ? false : true,
                  }}
                />
              </span>
              <span
                // set assignement isChecked apply style
                style={{ textDecoration: assignment.checked && "line-through" }}
              >
                {assignment.content}
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
          id="input-field"
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

            const newAssignment = { content: input, checked: false };
            newAssignments.push(newAssignment);

            setAssignments(newAssignments);
            // reset input
            setInput("");
          }}
        >
          add task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
