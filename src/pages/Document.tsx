import React, { FC, useContext, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { useDocumentsContext } from '../documents/hooks';

import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Dropzone from '../components/Dropzone';


const getDocumentTitle = (path: string) => {
  if (!path) {
    return 'untitled document'
  }
  const pathSplit = path.split('/');
  return pathSplit[pathSplit.length - 1];
}

const Document: FC<{ documentPath?: string }> = ({ documentPath }) => {
  const {
    updateDocument,
    getDocument,
    addDocuments,
    getPaths,
  } = useDocumentsContext();

  const [ currentDocument, setCurrentDocument ] = useState<string | undefined>(documentPath)
  
  return (
    <Dropzone onFileDrop={
      docs => {
        const [firstDoc] = docs;
        addDocuments(docs);
        setCurrentDocument(firstDoc.path);
      }}>
      <Container fluid>
        <Header
          title={currentDocument}
          onSave={() => {}}
          onNew={() => {}}
        />
        <Editor
          document={currentDocument ? getDocument(currentDocument) : undefined}
          updateDocument={updateDocument}
          onSave={() => {}} 
        />
        <Footer/>
      </Container>
    </Dropzone>
  )
}  

export default Document; 