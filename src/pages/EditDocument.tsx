import React, { FC, useContext, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { useDocumentsContext } from '../documents/hooks';

import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Dropzone from '../components/Dropzone';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Document } from '../documents/types';
import qs from 'qs';


const EditDocumentComponent: FC<Document> = ({
  path, content,
}) => {
  const history = useHistory();
  const { addDocuments } = useDocumentsContext();
  const [_path, setPath] = useState(path);
  const [_content, setContent] = useState(content);

  return (
    <Dropzone redirectOnDrop>
      <Container fluid>
        <Header
          title={path}
          onTitleUpdate={(path) => {
            setPath(path);
          }}
          onSave={() => {
            addDocuments([{ path: _path, content: _content }]);
            history.push(`/documents/edit?${qs.stringify({path: _path})}`);
          }}
        />
        <Editor
          content={_content}
          onChange={(content) => {
            setContent(content)
          }}
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
  
  return <EditDocumentComponent {...document}/>
}



export default PageWrapper; 