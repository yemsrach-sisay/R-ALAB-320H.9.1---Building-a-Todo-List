import React, { useState } from "react";

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  const handleSave = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id: todo.id, title: editedTodo },
    });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.title}
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
