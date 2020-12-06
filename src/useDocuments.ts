import { useState } from "react";

import { Document, Documents } from './types';

type Reducer<T> = (state: T) => T;

const updateDocumentReducer = (document: Document): Reducer<Documents> => {
  return (documents: Documents) => ({
    ...documents,
    [document.path]: document
  })
};

const deleteDocumentReducer = (path: string): Reducer<Documents> => {
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

export const useDocuments = (initialState: Documents) => {
  const [ documents, setDocuments ] = useState<Documents>(initialState);

  const addDocuments = (addedDocs: Document[]) => setDocuments(addDocumentsReducer(addedDocs));
  const setDocument = (document: Document) => setDocuments(updateDocumentReducer(document));
  const deleteDocument = (path: string) => setDocuments(deleteDocumentReducer(path));
  const getDocument = (path: string) => documents[path];

  const getPaths = () => Object.keys(documents);

  return {
    setDocument,
    getDocument,
    getPaths,
    deleteDocument,
    documents,
    addDocuments,
  }
}