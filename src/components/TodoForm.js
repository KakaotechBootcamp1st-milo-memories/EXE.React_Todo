import React ,{useState} from "react";

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} id="todo-form">
            <input
            type="text"
            id="todo-input"
            placeholder="할 일을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required/>
            <button type="submit">추가</button>
        </form>
    )
}

export default TodoForm