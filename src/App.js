import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddTask from "./pages/AddTask.jsx";

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
