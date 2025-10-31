import { useState } from "react";
import "./App.css";

function App(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>📝 React Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Yeni görev ekle..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;