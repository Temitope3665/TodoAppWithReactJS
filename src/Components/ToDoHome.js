import { useState } from "react";

const Home = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    // const handleChange = (e) => {
    //     setInputValue(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        inputValue === '' ? alert("input must not be empty") :
            setTodos([...todos, inputValue])
            setInputValue('')
    }

    const handleDelete = index => {
        const newTodo = todos.slice(); // use the slice method to make a copy of an array
        newTodo.splice(index, 1)
        setTodos(newTodo)
    }

    return (
        <div className="todo-wrapper">
            <h1 className="heading">Todo App</h1>

            <input className="input-todo" type='text' value={inputValue} placeholder="Enter your todo" onChange={(e) => setInputValue(e.target.value)} />
            <button className="add-btn" onClick={handleSubmit}>Add Todo</button>

            {todos.map((todo, index) => (
                <div className="todo-list" key={index}>
                    <p>{todo}</p>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Home;