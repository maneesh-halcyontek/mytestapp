import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = ({ tasks }) => (
  <div>
    <h1>My Tasks</h1>
    <Link to="/add">Add New Task</Link>
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  </div>
);

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>New Task</h1>
      <input
        placeholder="Type a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTask(input)}>Save</button>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default function App() {
  const [tasks, setTasks] = useState(["Buy Milk"]);
  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
      </Routes>
    </BrowserRouter>
  );
}
