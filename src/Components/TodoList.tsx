import React from "react";

type TodoItem = {
  id: number;
  text: string;
  complete: boolean;
};

function TodoList() {
  const todos: TodoItem[] = [
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Learn TypeScript", complete: false },
    { id: 3, text: "Build a todo app", complete: true },
  ];
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h4>{todo.text}</h4>
            <p>{String(todo.complete)}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
