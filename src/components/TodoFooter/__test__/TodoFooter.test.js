import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import TodoFooter from '../TodoFooter'

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe("TODO Footer", () => {

    it('should render the correct amount of incomplete tasks', async () => {
      render(
      <MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
    it('should render "task" for a single task', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
})


