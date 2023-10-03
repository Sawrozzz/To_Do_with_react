import React, { useState } from "react";

function Form() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleTaskInput = (e) => {
    setTask(e.target.value);   //✅
  };

  const addTask = () => {
    if (task.trim() !== "") {  //✅
      const newTask = {
        id: Date.now(),
        text: task,
      };
      setList([...list, newTask]);
      setTask(""); // Clear the input field
    }
  };

  const toggleTask = (taskId) => {
    setList((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="Forform">
        <input className="form"
          type="text"
          placeholder="Add your text Here.."
          value={task}
          onChange={handleTaskInput}
        />
        </div>
      <ul className="list-container">
        {list.map((task) => (
          <li className="list" key={task.id}>
            <input className="check"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addTask}>
      +
    </button>
    </>
  );
}

export default Form;
