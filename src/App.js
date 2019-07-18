import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { AppFooter, AppHeader } from './components';
import NotFound from './routes/NotFound/NotFound';
import Routes from './routes';
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
          <meta name="author" content="Alisa Filatova, alicedesign.site" />
        </Helmet>
        <div className="page">
          <AppHeader />
          {isOpenMenu && (
            <button
              className="close-btn main-nav__close-btn"
              type="button"
              onClick={this.onMenuButtonClick}
            >
              Close
            </button>
          )}
          {!isOpenMenu && (
            <button
              className="menu-open main-nav__menu-open"
              type="button"
              onClick={this.onMenuButtonClick}
            >
              Menu
            </button>
          )}
          <div className="page-content">
            <nav className={`navigation ${isOpenMenu && `navigation_open`}`}>
              {Routes.map((item) => (
                <Link
                  key={item.title}
                  className={`navigation__item ${item.path === this.props.location.pathname && `selected`}`}
                  to={item.path}
                  onClick={this.onMenuButtonClick}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
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
