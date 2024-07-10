import React from "react";

const TodoItem = ({index, todo, toggleComplete, deleteTodo}) => {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}/>
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>삭제</button>
        </li>
    );
};

export default TodoItem;