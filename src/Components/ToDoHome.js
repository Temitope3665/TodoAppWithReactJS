import { useEffect, useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue === ""
      ? alert("input must not be empty")
      : setTodos([...todos, inputValue]);
    setInputValue("");
};

localStorage.setItem("todos", JSON.stringify([...todos]));

  useEffect(() => {
      const td = localStorage.getItem('todos')
      td === null ? setTodos(null) :
      setTodos(JSON.parse(td))
  }, []);

  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const handleEdit = (id, todo) => {
    setEditing(true);
    setEditIndex(id);
    setInputValue(todo);
  };

  const submitEdit = () => {
    todos[editIndex] = inputValue;
    setEditing(false);
    setInputValue("");
  };

  return (
    <div className="todo-wrapper">
      <h1 className="heading">Todo App</h1>

      <input
        className="input-todo"
        type="text"
        value={inputValue}
        placeholder="Enter your todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!editing && (
        <button className="add-btn" onClick={handleSubmit}>
          Add Todo
        </button>
      )}
      {editing && (
        <button className="edit-btn" onClick={submitEdit}>
          Edit Todo
        </button>
      )}

      {todos === null ? null : todos.map((todo, index) => (
        <div
          className="todo-list"
          key={index}
          onDoubleClick={() => handleEdit(index, todo)}
        >
          <p>{todo}</p>
          {!editing && (
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
