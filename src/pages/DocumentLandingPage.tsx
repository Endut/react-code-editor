import React, { FC, useContext } from 'react';
import { Button, Container, ListGroup, Nav, Navbar, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Dropzone from '../components/Dropzone';
import { useDocumentsContext } from '../documents/hooks';
import qs from 'qs';
import DocumentListItem from '../components/DocumentListItem';
import Footer from '../components/Footer';


const DocumentLandingPage: FC<{}> = () => {
  const { getPaths, removeDocument } = useDocumentsContext();
  const paths = getPaths();
  const history = useHistory();
  return (
    <Dropzone render={(openDialog) => (
      <Container fluid>
        <Navbar expand="lg">
          <Nav>
            <Button variant="link" onClick={(e) => history.push(`/documents/new`)}>New document</Button>
            <Button variant="link" onClick={openDialog}>Upload from desktop</Button>
          </Nav>
        </Navbar>
        <ListGroup>
          {paths.map(path => (
            <ListGroup.Item key={path}>
              <DocumentListItem
                path={path}
                onClick={() => history.push(`/documents/edit?${qs.stringify({path})}`)}
                onRemove={() => removeDocument(path)}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Footer />
      </Container>
    )}>
    </Dropzone>
  );  
}
export default DocumentLandingPage;