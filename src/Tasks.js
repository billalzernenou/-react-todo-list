import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const handleClickDeleteAssignement = (index) => {
    let modifiedAssignments = [...assignments];
    modifiedAssignments.splice(index, 1);
    setAssignments(modifiedAssignments);
  };

  const handleClickAchived = (assignment, index) => {
    const newAssignments = [...assignments];
    if (assignment.checked) {
      newAssignments[index].checked = false;
    } else {
      newAssignments[index].checked = true;
    }
    setAssignments(newAssignments);
  };

  return (
    <div className="tasks container">
      <div className="assignements">
        {/* map throw assignments  */}
        {assignments.map((assignment, index) => {
          return (
            !assignment.checked && (
              <div className="assignement" key={index}>
                <div>
                  {/* ternary assignement checked   */}
                  {/* {assignment.checked ? ( */}
                  <input
                    type="checkbox"
                    onClick={() => handleClickAchived(assignment, index)}
                  />
                </div>
                <div
                  // set assignement isChecked apply style
                  style={{
                    textDecoration: assignment.checked && "line-through",
                  }}
                >
                  <p>{assignment.content}</p>
                </div>
                <div>
                  <button
                    // delete assignement
                    onClick={() => handleClickDeleteAssignement(index)}
                  >
                    <FontAwesomeIcon
                      icon="trash-alt"
                      color="#5C48D3"
                      size="1x"
                    />
                  </button>
                </div>
              </div>
            )
          );
        })}
        {/* ---------------------------------------------------- */}
        {assignments.map((assignment, index) => {
          return (
            assignment.checked && (
              <div className="assignement" key={index}>
                <div>
                  {/* ternary assignement checked   */}
                  {/* {assignment.checked ? ( */}
                  <input
                    type="checkbox"
                    onClick={() => handleClickAchived(assignment, index)}
                    checked
                  />
                </div>
                <div
                  // set assignement isChecked apply style
                  style={{
                    textDecoration: assignment.checked && "line-through",
                  }}
                >
                  <p>{assignment.content}</p>
                </div>
                <div>
                  <button
                    // delete assignement
                    onClick={() => handleClickDeleteAssignement(index)}
                  >
                    <FontAwesomeIcon
                      icon="trash-alt"
                      color="#5C48D3"
                      size="1x"
                    />
                  </button>
                </div>
              </div>
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
