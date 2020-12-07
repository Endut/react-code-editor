import React, { FC, useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Router, Switch } from 'react-router-dom';
import { history } from './history';

import Document from './pages/Document';
import DocumentLandingPage from './pages/DocumentLandingPage';
import { DocumentsProvider } from './documents';



const App: FC = () => {  
  return (
    <DocumentsProvider>
      <Router history={history}>
        <Switch>
          <Route exact path='/documents/new'>
            <Document />
          </Route>
          <Route path='/documents'>
            <DocumentLandingPage />
          </Route>
        </Switch>
      </Router>
    </DocumentsProvider>
  )
}  

export default App; 
