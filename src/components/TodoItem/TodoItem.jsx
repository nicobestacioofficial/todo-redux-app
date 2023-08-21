import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaRegWindowClose,
  FaEdit, // New icon for edit
} from "react-icons/fa";
import cx from "classnames";
import "./TodoItem.css";
import { deleteTodo, updateTodo } from "../../store/reducers/todos";

export default function TodoItem({ todo }) {
  const { id, title: initialTitle, text: initialText, state } = todo;
  const dispatch = useDispatch();
  const [inProgressClicked, setInProgressClicked] = useState(false);
  const [doneClicked, setDoneClicked] = useState(false);
  const [editMode, setEditMode] = useState(false); // New edit mode state
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);

  const onDeleteClick = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  const onDoneClick = useCallback(() => {
    dispatch(updateTodo({ id, state: "done" }));
    setDoneClicked(true);
    setInProgressClicked(false); // Reset the inProgressClicked state
  }, [dispatch, id]);

  const onInProgressClick = useCallback(() => {
    dispatch(updateTodo({ id, state: "in progress" }));
    setInProgressClicked(true);
    setDoneClicked(false); // Reset the doneClicked state
  }, [dispatch, id]);

  const onSaveClick = useCallback(() => {
    // Dispatch an action to update the title and text
    dispatch(updateTodo({ id, title, text }));
    setEditMode(false);
  }, [dispatch, id, title, text]);

  const containerClassName = cx("todo-item-container", {
    "todo-item-done": state === "done",
  });

  const inProgressClassName = cx("todo-mark-in-progress", {
    "in-progress": state === "in progress",
    clicked: inProgressClicked,
  });

  const doneClassName = cx("todo-mark-done", {
    done: state === "done",
    clicked: doneClicked,
  });

  const textClassName = cx("todo-item-text", {
    strikethrough: (state === "done" && doneClicked) || state === "done",
  });

  return (
    <div className={containerClassName}>
      <div className="todo-item-header-container">
        <h2 className="todo-item-header">
          {editMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </h2>
        <FaEdit
          size={20}
          className="todo-item-edit" // Add CSS for this class
          onClick={() => setEditMode(!editMode)}
        />
        <FaRegWindowClose
          size={20}
          className="todo-item-cross"
          onClick={onDeleteClick}
        />
      </div>
      <p className={textClassName}>
        {editMode ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
        ) : (
          text
        )}
      </p>
      <div className="todo-status-container">
        <div className="todo-status">{state}</div>
        <FaHourglassHalf
          size={20}
          className={inProgressClassName}
          onClick={onInProgressClick}
        />
        <FaCheckCircle
          size={20}
          className={doneClassName}
          onClick={onDoneClick}
        />
      </div>
      {editMode && (
        <button className="save-button" onClick={onSaveClick}>
          Save
        </button>
      )}
    </div>
  );
}
