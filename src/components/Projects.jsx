import { useState } from "react";

export default function Projects() {
  // ===== 1. LOGIN FORM STATE =====
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ===== 2. TODO LIST STATE =====
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // ===== 3. CALCULATOR STATE =====
  const [calcDisplay, setCalcDisplay] = useState("");

  // ===== LOGIN HANDLER =====
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in both email and password.");
      return;
    }
    setMessage(`Welcome, ${email}! (Demo only — no backend)`);
  };

  // ===== TODO HANDLERS =====
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // ===== CALCULATOR HANDLER =====
  const handleCalcClick = (val) => {
    if (val === "C") {
      setCalcDisplay("");
    } else if (val === "=") {
      try {
        // Note: eval() is used here for simplicity in this demo
        setCalcDisplay(eval(calcDisplay).toString());
      } catch {
        setCalcDisplay("Error");
      }
    } else {
      setCalcDisplay(calcDisplay + val);
    }
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">

        {/* ===== PROJECT 1: LOGIN FORM ===== */}
        <div className="card">
          <div className="card-body">
            <h3>Login Form</h3>
            <p>A simple login interface demo using React state.</p>
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn primary">Login</button>
            </form>
            {message && <p className="login-msg">{message}</p>}
            <div className="links">
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </div>

        {/* ===== PROJECT 2: TODO LIST ===== */}
        <div className="card">
          <div className="card-body">
            <h3>Todo List</h3>
            <p>Add, toggle, and delete tasks using React state management.</p>
            <form onSubmit={addTodo} className="todo-form">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button type="submit" className="btn primary">+</button>
            </form>
            <ul className="todo-list">
              {todos.length === 0 && <li className="todo-empty">No tasks yet.</li>}
              {todos.map((t) => (
                <li key={t.id} className={t.done ? "todo-item done" : "todo-item"}>
                  <span onClick={() => toggleTodo(t.id)}>{t.text}</span>
                  <button onClick={() => deleteTodo(t.id)} className="todo-del">✕</button>
                </li>
              ))}
            </ul>
            <div className="links">
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </div>

        {/* ===== PROJECT 3: CALCULATOR ===== */}
        <div className="card">
          <div className="card-body">
            <h3>Calculator</h3>
            <p>A basic calculator built with React state and logic.</p>
            
            <div className="calc-display">{calcDisplay || "0"}</div>
            
            <div className="calc-grid">
              {["C", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((btn) => (
                <button key={btn} onClick={() => handleCalcClick(btn)} className="calc-btn">
                  {btn}
                </button>
              ))}
            </div>
            
            <div className="links">
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}