import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  it('renders without crashes', () => {
    render(<App />);
    const newDocumentButton = screen.getByText(/new document/i);
    expect(newDocumentButton).toBeInTheDocument();

    const uploadFromDesktopButton = screen.getByText(/upload from desktop/i);
    expect(uploadFromDesktopButton).toBeInTheDocument();
  });

});

describe('landing on other pages', () => {

});
