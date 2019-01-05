import React from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import { Route, Switch, Link } from 'react-router-dom';
import { AppFooter, AppHeader } from './components';
import NotFound from './routes/NotFound/NotFound';
import Routes from './routes';
import './App.less';

class App extends React.Component {
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
						<nav className="navigation">
							{Routes.map((item) => (
								<Link
									key={item.title}
									className="navigation-item"
									to={item.path}
									activeClassName="selected"
								>
									{item.title}
								</Link>
							))}
						</nav>
            <Switch>
              {Routes.map(route => <Route key={route.path} component={route.component} path={route.path} exact={route.exact} />)}
              <Route component={NotFound} />
            </Switch>
          </div>
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default observer(App);
