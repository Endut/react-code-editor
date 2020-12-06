import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  it('renders without crashes', () => {
    render(<App />);
    const header = screen.getByText(/py/i);
    expect(header).toBeInTheDocument();
  });
});