import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Navigating to Reservation Form and checking if the form button exist.', () => {
  render(<App />);
  const linkElement = screen.getByText("Reservations");
  fireEvent.click(linkElement);
  const reservationButton = screen.getByText("Make Your Reservation");
  expect(reservationButton).toBeInTheDocument();
});

test('Validate times list initialized by default (initializeTimes())', () => {
  render(<App />);
  const selectField = screen.getByTestId("res-time");
  expect(selectField.childNodes.length).toBe(0);
})

test('Validate times list after picking a dat (updateTimes())', () => {
  render(<App />);
  const dateField = screen.getByTestId("res-date");
  const selectField = screen.getByTestId("res-time");
  fireEvent.change(dateField, {target: {value: "2023-06-30"}});
  expect(selectField.childNodes.length).toBe(6);
})