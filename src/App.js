import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['one', 'two', 'three']);
  const [value, setValue] = useState('');
  const handleChange = (e) => {setValue(e.target.value)};
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
  }
  const addTodo = (value) => {
    const newTodos = [...todos, value]
    setTodos(newTodos);
  }
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>My Cool Todos</h1>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>delete</button>
            </li>
          )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={value}
        onChange={handleChange}
        />
        <input 
        type="submit"
        value="Submit"
        />
      </form>
    </div>
  );
}

export default App;
