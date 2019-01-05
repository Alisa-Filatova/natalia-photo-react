import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fragment>
    <BrowserRouter>
      <Route
        path='/'
        render={() => <App /> }
      />
    </BrowserRouter>
  </Fragment>, document.getElementById('root')
);
registerServiceWorker();
