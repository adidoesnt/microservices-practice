import { useState } from "react";
import "./App.css";

const DUMMY_TODOS = [
  {
    _id: 1,
    name: "task 1",
    completed: false,
  },
  {
    _id: 2,
    name: "task 2",
    completed: false,
  },
  {
    _id: 3,
    name: "task 3",
    completed: false,
  },
];

function Todo({ _id, name, completed }) {
  const [markedComplete, setMarkedComplete] = useState(completed);

  const handleClick = () => {
    // add interaction with backend later
    setMarkedComplete(true);
  };

  return (
    !markedComplete && (
      <>
        <div style={{margin: 50}}>
          <h2>
            {_id}: {name}
          </h2>
          <button onClick={handleClick}>Mark Complete</button>
        </div>
      </>
    )
  );
}

function App() {
  const todos = DUMMY_TODOS;

  return (
    <>
      <div>
        <h1>Tasks</h1>
        <hr />
        <div style={{ marginTop: 50 }}>
          {todos.map((todo) => {
            const { _id, name, completed } = todo;
            return (
              <Todo key={_id} _id={_id} name={name} completed={completed} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
