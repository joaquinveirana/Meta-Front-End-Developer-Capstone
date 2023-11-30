import React from 'react';
import { render, screen } from '@testing-library/react';

import ReservationPage from '../Reservation';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

it('checks the header of the reservation page', () => {
  render(<ReservationPage />);
  const header = screen.getByRole('heading', { name: 'Reserve a table!' });
  expect(header).toBeInTheDocument();
});
