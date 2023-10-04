
import React, { useState } from "react";

function Form() {
  const [task, setTask] = useState(""); //for input
  const [list, setList] = useState([]); // for list
  // const [final, setFinal] = useState([])

  const handleTaskInput = (e) => {
    setTask(e.target.value);   //✅
  };

  const addTask = () => {
    if (task.trim() !== "") {  //✅
      const newTask = {
        id: Date.now(),
        text: task,
        completed:false
      };
      setList([...list, newTask]);
      setTask(""); // Clear the input field
    }
  };

  // const toggleTask = (taskId) => {
  //   setList((previousTasks) =>
  //     previousTasks.map((task) =>     
  //       task.id === taskId ?
  //        { ...task, completed: !task.completed }: task
  //     )
  //   );
  // };

const toggleTask =(e)=>{
  list.map((task)=>{
    if(task.id===e.target.id)
    {
      return{
        ...task, completed:e.target.checked? "completed":"pending"
      }
      return task;
    }
  })
}



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
      <ol className="list-container">
        {list.map((task) =>  (
          
          <li className="list" key={task.id} >
            <input className="check"
              type="checkbox" 
              id={task.id}
              checked={task.complete}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ol>
      <button className="btn" onClick={addTask}>
      +
    </button>
    </>
  );
}

export default Form;
