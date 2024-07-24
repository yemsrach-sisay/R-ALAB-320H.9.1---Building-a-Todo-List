import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
    ))}
  </ul>
);

export default TodoList;
