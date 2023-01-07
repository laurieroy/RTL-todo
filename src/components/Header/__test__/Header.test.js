import { render, screen } from '@testing-library/react';
import Header from '../Header';

xit('should render same text passed into the title prop', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into the title prop using Role', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header"});
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into the title prop using semantic', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into the title prop using testId', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});
