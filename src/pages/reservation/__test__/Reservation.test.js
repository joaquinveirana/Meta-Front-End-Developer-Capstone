import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ReservationPage from '../Reservation';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

beforeEach(() => {
  render(<ReservationPage />);
});

describe('Testing Valid Elements', () => {
  it('checks the header ofd the reservation page', () => {
    const header = screen.getByRole('heading', { name: 'Reserve a table!' });
    expect(header).toBeInTheDocument();
  });

  it('checks the header of the reservation page has the correct content', () => {
    const header = screen.getByRole('heading', { name: 'Reserve a table!' });
    expect(header).toHaveTextContent('Reserve a table!');
  });

  it('checks all the hour buttons are visible', () => {
    const hoursContainers = screen.getAllByTestId('hour-container');
    hoursContainers.forEach((hourCont) => {
      expect(hourCont).toBeVisible();
    });
  });
});

describe('Testing Form Rules', () => {
  it('check the submit is disabled by default', () => {
    const submitButtons = screen.getAllByTestId('submit-button');
    submitButtons.forEach((submitButton) => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('check the submit is enabled after selecting hour, guests and occasion', () => {
    const hoursContainers = screen.getAllByTestId('hour-container');
    const hourToSelect = hoursContainers[1];
    fireEvent.click(hourToSelect);
    expect(hourToSelect).toHaveClass('reservation-content-form-hour-selected');

    const guestsInput = screen.getByLabelText('guests-number-selector');
    fireEvent.change(guestsInput, { target: { value: '3' } });
    expect(guestsInput.value).toBe('3');

    const occasionsContainers = screen.getAllByTestId('occasion-container');
    const occasionToSelect = occasionsContainers[1];
    fireEvent.click(occasionToSelect);
    expect(occasionToSelect).toHaveClass(
      'reservation-content-form-hour-selected'
    );

    const submitButtons = screen.getAllByTestId('submit-button');
    submitButtons.forEach((submitButton) => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
