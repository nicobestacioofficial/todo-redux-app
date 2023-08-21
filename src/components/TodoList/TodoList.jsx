import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../store/reducers/todos";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

export function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
