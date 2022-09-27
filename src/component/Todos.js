import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div>
            <Todo
              todo={todo.todo}
              key={todo.id}
              id={todo.id}
              handleRemoveTodo={props.handleRemoveTodo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
