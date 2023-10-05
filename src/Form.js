import React, { useState } from "react";

export default function Form() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: String(todos.length + 1), title: input, status: "pending" }]);
    setInput("");
    setVisible(false);
  };

  const toggleInput = () => {
    setVisible(!visible);
  };

  const handleOnChange = (e) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === e.target.id) {
        return { ...todo, status: e.target.checked ? "completed" : "pending" };
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const handleTextOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>


    {todos.map((todo) => (
      <div className="list" key={todo.id} style={{ display: "flex" }}>
        <h3
          style={{
            // marginRight: 20,
            textDecoration: todo.status === "completed" ? "line-through" : "",
            color: todo.status === "completed" ? "gray" : "black",
          }}
        >
          {todo.title}
        </h3>
        <input className="mylist"
          type="checkbox"
          id={todo.id}
          checked={todo.status === "completed"}
          onChange={handleOnChange}
        />
      </div>
    ))}
      {visible ? (
        <div>
          <input className="forInput"
            type="text"
            value={input}
            id={"input"}
            onChange={handleTextOnChange}
          />
          <button className="submitBtn" onClick={handleAddTask}>Add todo</button>
        </div>
      ) : (
        <button className="btn" onClick={toggleInput}>+</button>
      )}
    </div>
  );
}
