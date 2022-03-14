import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn more about SPWR button', () => {
  render(<App />);
  const modalButton = screen.getByText(/learn more about spwr/i);
  expect(modalButton).toBeInTheDocument();
});

test('displays modal with info about SPWR', () => {
  render(<App />);
  const modalButton = screen.getByText(/learn more about spwr/i);
  fireEvent.click(modalButton);
  const modalContent = screen.getByText(
    /spwr corporation is a public company/i
  );
  expect(modalContent).toBeInTheDocument();
});
