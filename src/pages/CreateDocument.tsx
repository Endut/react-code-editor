import React, { FC, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { useDocumentsContext } from '../documents/hooks';

import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Dropzone from '../components/Dropzone';
import { useHistory } from 'react-router-dom';
import qs from 'qs';

const CreateDocument: FC<{}> = () => {
  const {
    addDocuments,
    documents,
  } = useDocumentsContext();
  const history = useHistory();
  const [ path, setPath ] = useState<string | undefined>()
  const [ content, setContent ] = useState('');

  return (
    <Dropzone redirectOnDrop>
      <Container fluid>
        <Header
          onTitleUpdate={path => setPath(path)}
          onSave={() => {
            if (!path || path === '') {
              return alert('could not save, please add a title');
            };
            addDocuments([{ path,  content }]);
            return history.push(`/documents/edit?${qs.stringify({path})}`)
          }}
        />
        <Editor
          content={content}
          onChange={content => setContent(content)}
        />
      </Container>
    </Dropzone>
  )
}  

export default CreateDocument;