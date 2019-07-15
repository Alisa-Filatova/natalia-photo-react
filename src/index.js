import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/index.less';

ReactDOM.render(
  <Fragment>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Fragment>, document.getElementById('root')
);

registerServiceWorker();
