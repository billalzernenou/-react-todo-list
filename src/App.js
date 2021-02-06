import "./App.css";
import Tasks from "./Tasks";
import Header from "./Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListUl, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faListUl, faTrashAlt);
function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
