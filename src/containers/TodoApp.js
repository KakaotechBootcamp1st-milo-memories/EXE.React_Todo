import React, {useState} from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {text, completed:false}]);
    };

    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => 
        i === index ? {...todo, completed: !todo.completed } : todo)
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_,i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Milo's TODO</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;