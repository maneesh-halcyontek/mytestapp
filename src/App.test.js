import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Integration Test: User can add a new task", () => {
  render(<App />);

  // 1. Check if initial task exists
  expect(screen.getByText(/Buy Milk/i)).toBeInTheDocument();

  // 2. Click "Add New Task" link
  const link = screen.getByText(/Add New Task/i);
  fireEvent.click(link);

  // 3. Type into the input
  const input = screen.getByPlaceholderText(/Type a task/i);
  fireEvent.change(input, { target: { value: "Learn CI/CD" } });

  // 4. Click Save
  const saveBtn = screen.getByText(/Save/i);
  fireEvent.click(saveBtn);

  // 5. Navigate back to Home
  const backLink = screen.getByText(/Back to Home/i);
  fireEvent.click(backLink);

  // 6. Assert: New task should now be on the list
  expect(screen.getByText(/Learn CI\/CD/i)).toBeInTheDocument();
});
