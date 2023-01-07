import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
  xit('should render same text passed into the title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});
describe("Extra tests to show functionality", () => {
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

  // FIND BY
  it('should render same text passed into the title prop using async findBy', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
  });

  // QUERY BY - used for not found
  it('should not error when not find text passed into the title prop using queryBy',  () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i)
    expect(headingElement).not.toBeInTheDocument();
  });

  // get all by
  it('getAllBy finds all elements and shows an array',  () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements.length).toBe(2);
  });
});