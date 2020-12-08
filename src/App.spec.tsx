import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import { history } from './history';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  history.push(route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('<App />', () => {
  describe('basic render', () => {
    it('renders without crashing', () => {
      render(<App/>);
      const newDocumentButton = screen.getByText(/new document/i);
      expect(newDocumentButton).toBeInTheDocument();
  
      const uploadFromDesktopButton = screen.getByText(/upload from desktop/i);
      expect(uploadFromDesktopButton).toBeInTheDocument();
    })

    it('redirects to document landing page', () => {
      renderWithRouter(<App />, { route: '/some-route' });
      const newDocumentButton = screen.getByText(/new document/i);
      expect(newDocumentButton).toBeInTheDocument();
    });

    it('initially upload project button is disabled', () => {
      render(<App />);
      const uploadProjectButton = screen.getByText(/upload project/i);
      expect(uploadProjectButton).toBeInTheDocument();
      expect(uploadProjectButton).toBeDisabled(); 
    });

    it('redirects to new document page on new document click', async () => {
      const history = createMemoryHistory();
      render(
        <Router history={history} >
          <App />
        </Router>
      );
      const newDocumentButton = screen.getByText(/new document/i);
      expect(newDocumentButton).toBeInTheDocument();
      
      userEvent.click(newDocumentButton);
      const untitledDocumentPlaceholder = screen.getByPlaceholderText(/untitled/i);
      expect(untitledDocumentPlaceholder).toBeInTheDocument();
    })

  });

});
