import React, { FC, useCallback, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { Document, Documents } from './types';
import { useDocuments } from './hooks';
import localStorage from './localStorage';

import Editor from './Editor';
import Footer from './Footer';
import Header from './Header';
import Dropzone from './Dropzone';


const getDocumentTitle = (path: string) => {
  if (!path) {
    return 'untitled document'
  }
  const pathSplit = path.split('/');
  return pathSplit[pathSplit.length - 1];
}

const App: FC = () => {
  const projectName = 'py';
  
  const initialState: Documents = projectName && localStorage.getItem(projectName) || {};
  const saveProject = useCallback((project: string, documents: Documents) => {
    localStorage.setItem(project, documents);
  }, []);

  const {
    setDocument,
    getDocument,
    deleteDocument,
    documents,
    addDocuments,
    getPaths,
  } = useDocuments(initialState);

  const [ currentDocument, setCurrentDocument ] = useState<string>(getPaths()[0])

  
  return (
    <Dropzone onFileDrop={
      docs => {
        const [firstDoc] = docs;
        addDocuments(docs);
        setCurrentDocument(firstDoc.path);
      }}>
      <Container fluid>
        <Header
          projectName={projectName}
          title={getDocumentTitle(currentDocument)}
          onSave={() => saveProject(projectName, documents)}
          onNew={() => {}}
        />
        <Editor
          document={getDocument(currentDocument)}
          setDocument={setDocument}
          onSave={() => saveProject(projectName, documents)} 
        />
        <Footer/>
      </Container>
    </Dropzone>
  )


}  

export default App; 
