import React, { FC, useContext, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { useDocumentsContext } from '../documents/hooks';

import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Dropzone from '../components/Dropzone';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { Document } from '../documents/types';
import qs from 'qs';


const EditDocument: FC<{document: Document}> = ({document}) => {

  const history = useHistory();
  const { addDocuments } = useDocumentsContext();
  const [ path, setPath ] = useState<string>(document.path)
  const [ content, setContent ] = useState(document.content);
 
  return (
    <Dropzone redirectOnDrop>
      <Container fluid>
        <Header
          title={path}
          onTitleUpdate={(path) => {
            setPath(path);
          }}
          onSave={() => {
            addDocuments([{ path, content }]);
            history.push(`/documents/edit?${qs.stringify({path})}`);
          }}
        />
        <Editor
          content={content}
          onChange={(content) => setContent(content)}
          withFooter
        />
        <Footer />
      </Container>
    </Dropzone>
  )
};

const PageWrapper: FC<{}> = () => {
  const location = useLocation();
  const { path: pathQuery } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
    parseArrays: false
  }) as { path: string };

  const {
    getDocument
  } = useDocumentsContext();

  const document = getDocument(pathQuery);

  if (!document) {
    return <Redirect to="/documents" />
  }

  return <EditDocument document={document}/>
}



export default PageWrapper; 