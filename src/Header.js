import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <FontAwesomeIcon icon="list-ul" size="3x" color="#5C48D3" />
        <h1>Todo List</h1>
      </div>
    </div>
  );
};

export default Header;
