import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
  const { title, description } = props.todo;
  const { id } = props;
  //   Delete data
  const handleBtn = (id) => {
    // alert(id);
    props.handleRemoveTodo(id);
  };
  return (
    <article className="todoList">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="trashBtn">
        <button onClick={() => handleBtn(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </article>
  );
};

export default Todo;
