import {Link } from "react-router-dom";

const Home = ({ tasks }) => (
  <div>
    <h1>My Tasks List</h1>
    <Link to="/add">Add New Task</Link>
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  </div>
);

export default Home;