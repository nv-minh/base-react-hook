import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [name, setName] = useState("");
  const handleClickbtn(event, name)=>{

  }
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          console.log("check event:", event);
          setName(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {

        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello Todo list with name = {name}
    </div>
  );
};

export default TodoList;