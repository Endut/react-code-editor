import React from 'react';
import { useContext, useState } from 'react';
import { Document, Documents, DocumentsApi } from './types';

type Reducer<T> = (state: T) => T;

const updateDocumentReducer = (document: Document): Reducer<Documents> => {
  return (documents: Documents) => ({
    ...documents,
    [document.path]: document
  })
};

const removeDocumentReducer = (path: string): Reducer<Documents> => {
  return (documents: Documents) => {
    const { [path]: toDelete, ...toKeep } = documents;
    return toKeep;
  };
};

const addDocumentsReducer = (addedDocs: Document[]): Reducer<Documents> => {
  return (documents: Documents) => {

    const allDocs = addedDocs.reduce((docs, doc) => {
      return {
        ...docs,
        [doc.path]: doc
      }
    }, documents);
    return allDocs;
  }
}

export const DocumentsContext = React.createContext<DocumentsApi | undefined>(
  undefined
);

export const useDocumentsContext = () => {
  const context = useContext(DocumentsContext);
  if (!context) {
    throw new Error(
      "useDocumentContext must be used within a DocumentsProvider"
    );
  }

  return context;
};


export const useDocuments = (initialState?: Documents): DocumentsApi => {
  const [ documents, setDocuments ] = useState<Documents>(initialState || {});

  const addDocuments = (addedDocs: Document[]) => setDocuments(addDocumentsReducer(addedDocs));
  const updateDocument = (document: Document) => setDocuments(updateDocumentReducer(document));
  const removeDocument = (path: string) => setDocuments(removeDocumentReducer(path));
  const getDocument = (path: string) => documents[path];
  const getPaths = () => Object.keys(documents);


  return {
    updateDocument,
    getDocument,
    getPaths,
    removeDocument,
    documents,
    addDocuments,
  }
}
