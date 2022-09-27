import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevtodos) => {
      return [...prevtodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    /*    alert(id);
    const filterTodos = todos.filter((todo) => todo !== id);
    setTodos(filterTodos); */
    setTodos((prevtodos) => {
      const filterTodos = prevtodos.filter((todo) => todo.id !== id);
      return filterTodos;
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
