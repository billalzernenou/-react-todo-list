import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ assignment, index, assignments, setAssignments }) => {
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
    <div>
      <div className="assignement" key={index}>
        <div>
          {/* ternary assignement checked   */}
          {/* {assignment.checked ? ( */}
          <input
            type="checkbox"
            onClick={() => handleClickAchived(assignment, index)}
            checked={assignment.checked ? true : false}
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
            <FontAwesomeIcon icon="trash-alt" color="#5C48D3" size="1x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
