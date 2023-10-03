import { useState } from "react";
import React from "react";

function Form(){
  const[task, setTask]= useState("");

  const[list, setList]= useState([]);
  const handleTaskInput =(e)=>{
    setTask(e.target.value);
  }
  const addTask=(e)=>{
    if(task.trim() !== " "){
      const newTask = {
        id:Date.now(),
        text:task,
        completed:false,
      };
      setList([...list,
        newTask
      ]);
      setTask(""); //to clear the input field
    };
  };

  return (
   <>
   <div className="Forform">
        <input type="text" name="" placeholder="Add your text Here.." value={task}
        onChange = {handleTaskInput}
        />
        <button className='btn' onClick={addTask}>+</button>
      </div>
      <input type="radio"
      checked = {task.completed}
   
   </>
  )
}

export default Form






// function Form() {
//   return (
//     <>
//       <div className="Forform">
//         <input type="text" name="" placeholder="Add your text Here.."></input>
//         <ul className="list-container">
//           <li className="list">Task 1</li>
//           <li className="list">Task 2</li>
//           <li className="list">Task 3</li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Form;
