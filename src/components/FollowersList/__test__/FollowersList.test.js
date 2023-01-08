import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe("Followers list", () => {
  it('should render a follower in list', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // waitFor(() => { timeout: 5000 });
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render list of followers', async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/);
    // waitFor(  () =>{ timeout: 5000 });
    expect(followerDivElements.length).toBe(5);
  });
});