import React from "react";
import Clock from "./Clock";
import Form from "./Form";

function App() {
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>To Do List</h2>
          <Clock />
          <Form />
        </div>
      </div>
    </>
  );
}
export default App;


// import React, { useState } from "react";

// function TodoApp() {
//   // State to manage the input field value
//   const [task, setTask] = useState("");

//   // State to manage the list of tasks
//   const [tasks, setTasks] = useState([]);

//   // Function to handle input field change
//   const handleInputChange = (e) => {
//     setTask(e.target.value);
//   };

//   // Function to add a task to the list
//   const addTask = () => {
//     if (task.trim() !== "") {
//       // Create a new task object with a unique ID
//       const newTask = {
//         id: Date.now(),
//         text: task,
//         completed: false,
//       };

//       // Update the tasks array with the new task
//       setTasks([...tasks, newTask]);

//       // Clear the input field
//       setTask("");
//     }
//   };

//   // Function to toggle the completion status of a task
//   const toggleTaskCompletion = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   // Function to remove a task from the list
//   const removeTask = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="todo-app">
//       <h1>To-Do App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={task}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskCompletion(task.id)}
//             />
//             <span className={task.completed ? "completed" : ""}>{task.text}</span>
//             <button onClick={() => removeTask(task.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

