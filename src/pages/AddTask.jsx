import { Link } from "react-router-dom";
const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");

  const submitTask = (input) => {
    setInput("");
    addTask(input);
  };
  return (
    <div>
      <h1>New Task</h1>
      <input
        placeholder="Type a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => submitTask(input)}>Save</button>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};
export default AddTask;