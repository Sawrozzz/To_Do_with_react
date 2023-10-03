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


