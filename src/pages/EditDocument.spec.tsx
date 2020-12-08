import React from 'react';
import { render, waitFor, screen, getByText } from '@testing-library/react';

import { DocumentsProvider } from '../documents';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Documents } from '../documents/types';
import App from '../App';

import EditDocument from './EditDocument';



const renderApp = (ui: React.ReactElement, initialDocumentState: Documents, route = '/') => {
  const history = createMemoryHistory()
  history.push(route);
  console.log(route);
  return render(
    <DocumentsProvider initialState={initialDocumentState}>
      <Router history={history}>
        {ui}
      </Router>
    </DocumentsProvider>
  )
}

describe('<EditDocument />', () => {
  const initialState = {
    'doc1.py': {
      path: 'doc1.py',
      content: 'some code'
    },
    'doc2.py': {
      path: 'doc2.py',
      content: 'some more code'
    }
  };

  it('renders without crashes', () => {
    const { getByDisplayValue } = renderApp(<EditDocument />, initialState, '/documents/edit?path=doc1.py');

    const title = getByDisplayValue(/doc1.py/i);
    expect(title).toBeInTheDocument();
  });
});
