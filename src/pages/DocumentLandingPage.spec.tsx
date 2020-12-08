import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DocumentLandingPage from './DocumentLandingPage';
import { DocumentsProvider } from '../documents';


describe('<DocumentLandingPage />', () => {
  it('renders without crashes', () => {
    const initialDocumentState = {
      'doc1.py': {
        path: 'doc1.py',
        content: 'some code'
      },
      'doc2.py': {
        path: 'doc2.py',
        content: 'some more code'
      }
    };
    render(
      <DocumentsProvider initialState={initialDocumentState}>
        <DocumentLandingPage />
      </DocumentsProvider>
    );
    const doc1 = screen.getByText(/doc1.py/i);
    expect(doc1).toBeInTheDocument();

    const doc2 = screen.getByText(/doc2.py/i);
    expect(doc1).toBeInTheDocument();
  });
});
