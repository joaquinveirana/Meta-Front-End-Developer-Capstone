import React from 'react';
import { render, screen } from '@testing-library/react';

import ReservationPage from '../Reservation';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

it('checks the header ofd the reservation page', () => {
  render(<ReservationPage />);
  const header = screen.getByRole('heading', { name: 'Reserve a table!' });
  expect(header).toBeInTheDocument();
});

it('checks the header of the reservation page has the correct content', () => {
  render(<ReservationPage />);
  const header = screen.getByRole('heading', { name: 'Reserve a table!' });
  expect(header).toHaveTextContent('Reserve a table!');
});

it('checks the header of the reservation page has the correct content', () => {
  render(<ReservationPage />);
  const header = screen.getByRole('heading', { name: 'Reserve a table!' });
  expect(header).toHaveTextContent('Reserve a table!');
});

it('checks all the hour buttons are visible', () => {
  render(<ReservationPage />);  
  const hoursContainer = screen.getAllByTestId('hour-container');
  expect(hoursContainer).toBeVisible();
});
