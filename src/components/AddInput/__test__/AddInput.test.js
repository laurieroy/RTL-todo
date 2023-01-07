import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {
  it('renders input element', async () => {
    render(
      <AddInput  
        todos={[]} 
        setTodos={mockSetTodo}
      />)
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', async () => {
    render(<AddInput  
      todos={[]} 
      setTodos={mockSetTodo}
    />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping"}})
    expect(inputElement.value).toBe("Go grocery shopping");
  });

  it('should have empty input when add button is clicked', async () => {
    render(<AddInput  
      todos={[]} 
      setTodos={mockSetTodo}
    />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping"}})
    const buttonElement = screen.getByRole("button", { name: /add/i});
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
});