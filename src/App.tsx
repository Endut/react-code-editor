import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { history } from './history';

import { DocumentsProvider } from './documents';
import DocumentLandingPage from './pages/DocumentLandingPage';
import EditDocument from './pages/EditDocument';
import CreateDocument from './pages/CreateDocument';

const App: FC = () => {

  return (
    <DocumentsProvider>
      <Router history={history}>
        <Switch>
          <Route path="/documents/edit">
            <EditDocument />
          </Route>
          <Route exact path="/documents/new">
            <CreateDocument />
          </Route>
          <Route exact path="/documents">
            <DocumentLandingPage />
          </Route>
          <Redirect to='/documents' />
        </Switch>
      </Router>
    </DocumentsProvider>
  )
}  

export default App; 
