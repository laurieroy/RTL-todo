import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /add/i});
  tasks.forEach(task => {
    fireEvent.change(inputElement, {target: { value: task} });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it('typed input is added to list after clicking `Add`', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /add/i});
    fireEvent.change(inputElement, {target: { value: "Get beer"}});
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/get beer/i);
    expect(divElement).toBeInTheDocument();
  });
  
  // Added test id to grab this task, not sure if just wanted an example
  it('should render multiple added items to list', async () => {
    render(<MockTodo />);
 
    addTask(["Get beer", "Make pizza", "Watch movie"]);
    const divElements = screen.getAllByTestId("task-container");

    expect(divElements.length).toBe(3);
  });

  it('added todo should not have completed class when initially rendered', async () => {
    render(<MockTodo />);
 
    addTask(["Get beer"]);
    const divElement = screen.getByText(/get beer/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });
 
  it('added todo should have completed class when clicked', async () => {
    render(<MockTodo />);
 
    addTask(["Get beer"]);
    const divElement = screen.getByText(/get beer/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });


})