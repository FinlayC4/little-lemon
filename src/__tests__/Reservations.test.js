import { render, screen, fireEvent } from '@testing-library/react';
import ReserveForm from "../components/ReserveForm.js";
import Reservations from "../pages/Reservations.js";

test('Renders the ReserveForm heading', () => {
  render(<Reservations/>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

