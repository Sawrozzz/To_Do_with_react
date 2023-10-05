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



// import { useState } from "react";

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [visible, setVisible] =useState(false);

//   const handleAddTask = ()=>{
//     if(input.trim()=== "")return;
//     setTodos([...todos,input]);
//     setInput("");
//     setVisible(false);
//   };
//   const toggleInput = () =>{
//     setVisible(!input);
//   };


//   const handleOnChange = (e) => {
//     const updatedTodo = todos.map((todo) => {
//       if (todo.id === e.target.id) {
//         return { ...todo, status: e.target.checked ? "completed" : "pending" };
//       }
//       return todo;
//     });

//     setTodos(updatedTodo);
//   };

//   const handleTextOnChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleOnClick = (e) => {
//     console.log(todos.length + 1, "new length");
//     setTodos([
//       ...todos,
//       { id: String(todos.length + 1), title: input, status: "pending" }
//     ]);
//     setInput("");
//   };

//   return (
//     <div>
    
//     {
//       visible?(
//         <div>
//         <input
//         type="text"
//         value={input}
//         id={"input"}
//         onChange={handleTextOnChange}
//       />
//       <button onClick={handleOnClick}>Add todo</button>
//       </div>
//       )
//     :(
//       <button onClick={toggleInput}>+</button>
//     )}

//       {todos.map((todo) => (
//         <>
//           <div style={{ display: "flex" }}>
//             <h1
//               style={{
//                 marginRight: 10,
//                 textDecoration:
//                   todo.status === "completed" ? "line-through" : "",
//                 color: todo.status === "completed" ? "gray" : "green"
//               }}
//             >
//               {todo.title}
//             </h1>
//             <input
//               type="checkbox"
//               id={todo.id}
//               checked={todo.status === "completed"}
//               onChange={handleOnChange}
//             />
//           </div>
//         </>
//       ))}
//     </div>
//   );
// }



// import React from "react";
// import TaskForm from "./TaskForm";

// function App() {
//   return (
//     <div className="App">
//       <h1>Task List</h1>
//       <TaskForm />
//     </div>
//   );
// }

// export default App;


