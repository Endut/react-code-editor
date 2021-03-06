import React from 'react';
import { render, waitFor, screen, getByText } from '@testing-library/react';
import DocumentLandingPage from './DocumentLandingPage';
import { DocumentsProvider } from '../documents';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Documents } from '../documents/types';

const wrapRender = (ui: React.ReactElement, initialDocumentState: Documents) => {
  const history = createMemoryHistory()
  return render(
    <DocumentsProvider initialState={initialDocumentState}>
      <Router history={history}>
        {ui}
      </Router>
    </DocumentsProvider>
  )
}

describe('<DocumentLandingPage />', () => {
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
    const { getByText } = wrapRender(<DocumentLandingPage />, initialState)
    const doc1 = getByText(/doc1.py/i);
    expect(doc1).toBeInTheDocument();

    const doc2 = getByText(/doc2.py/i);
    expect(doc1).toBeInTheDocument();
  });

  it('removes a document', () => {
    const { getByTestId, queryByText } = wrapRender(<DocumentLandingPage />, initialState)
    const doc1Remove = getByTestId('remove-doc1.py');
    expect(doc1Remove).toBeInTheDocument();

    userEvent.click(doc1Remove);
    const doc1 = queryByText(/doc1.py/i);
    expect(doc1).toBeNull();
  });
});
