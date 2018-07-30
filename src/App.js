import React from 'react';
// import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { AppFooter, AppHeader } from './components';
import Routes from './routes';
import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>Natalia Biriouk - Photography</title>
          <meta name="description" content="Natalia Biriouk Photography in California!" />
          <meta name="keywords" content="Natalia Biriouk photography California USA Wedding Newborn Event portfolio portrait photo photoshoot family images" />
          <meta name="author" content="Alisa Filatova, alicedesign.site" />
        </Helmet>
        <div className="page">
          <AppHeader />
          <div className="page-content">
            <Switch>
              {Routes.map(route => <Route key={route.path} {...route} />)}
              {/*<Route component={NotFound} />*/}
            </Switch>
          </div>
          <AppFooter />
        </div>
      </div>
    );
  }
}
