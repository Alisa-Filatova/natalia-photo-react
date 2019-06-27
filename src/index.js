import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fragment>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Fragment>, document.getElementById('root')
);
registerServiceWorker();
