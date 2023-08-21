import "./App.css";
import { TodoList, NewTodoForm } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>ToDo List Application</h1>
        <NewTodoForm className="plus" />
      </div>
      <hr style={{marginBottom: '30px'}}/>
      <TodoList />
    </div>
  );
}

export default App;
