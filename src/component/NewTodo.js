import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;

  const handleChangeName = (event) => {
    const name = event.target.name;
    setTodo((oldtodo) => {
      return {
        ...oldtodo,
        [name]: event.target.value,
      };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(todo);
    props.onAddTodo(todo);
    setTodo({ title: "", description: "" });
  };

  return (
    <div className="todoForm">
      <form onSubmit={submitForm}>
        <label>Title: </label>
        <input
          type="text"
          id="todo"
          name="title"
          placeholder="Type title"
          onChange={handleChangeName}
          value={title}
        />
        <br />
        <label>Description: </label>
        <textarea
          type="text"
          id="todo"
          name="description"
          placeholder="Type description"
          rows="5"
          cols="35"
          value={description}
          onChange={handleChangeName}
        ></textarea>
        <br />
        <button className="add" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
