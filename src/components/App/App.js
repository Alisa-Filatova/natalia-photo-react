import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppFooter, AppHeader, NavigationMenu } from '../index';
import NotFound from '../../routes/NotFound/NotFound';
import Routes from '../../routes';
import './App.less';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenMenu: false,
    }
  }

  onMenuButtonClick = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu})
  };

  render() {
    const { isOpenMenu } = this.state;

    return (
      <div className="main">
        <Helmet>
          <title>Natalia Biriouk - Photography</title>
          <meta name="description" content="Natalia Biriouk Photography in California!" />
          <meta name="keywords" content="Natalia Biriouk photography California USA Wedding Newborn Event portfolio portrait photo photoshoot family images" />
          <meta name="author" content="Alisa Filatova, alicedesign.ru" />
        </Helmet>
        <div className="page">
          <AppHeader
            isOpenMenu={isOpenMenu}
            onMenuButtonClick={this.onMenuButtonClick}
          />
          <div className="page-content">
            <NavigationMenu
              isOpenMenu={isOpenMenu}
              location={this.props.location.pathname}
              onMenuButtonClick={this.onMenuButtonClick}
            />
            <Switch>
              {Routes.map(route => (
                <Route
                  key={route.path}
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                />
                )
              )}
              <Route component={NotFound} />
            </Switch>
          </div>
          <AppFooter />
        </div>
      </div>
    );
  }

}

export default withRouter(App);
