import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppFooter, AppHeader, Loader } from '../index';
import NotFound from '../../routes/NotFound/NotFound';
import Routes from '../../routes';
import { SITE_NAME, AUTHOR_SITE, AUTHOR_NAME, SITE_TITLE } from '../../constants';
import styles from './App.less';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenMenu: false,
      loading: true,
    };
  }

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 1500);
  };

  onMenuButtonClick = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  onLogoClick = () => {
    this.setState({ isOpenMenu: false });
  };

  render() {
    const { isOpenMenu, loading } = this.state;

    return (
      <div className={styles.root}>
        <Helmet>
          <title>{SITE_NAME}</title>
          <meta name="description" content={`${SITE_TITLE} in California!`} />
          <meta name="keywords" content={`${SITE_TITLE} California USA Wedding Newborn Event portfolio portrait photo photoshoot family images`} />
          <meta name="author" content={`${AUTHOR_NAME}, ${AUTHOR_SITE}`} />
        </Helmet>
        {loading && <Loader />}
        <main className={styles.page}>
          <AppHeader
            isOpenMenu={isOpenMenu}
            onMenuButtonClick={this.onMenuButtonClick}
            pathname={this.props.location.pathname}
            onLogoClick={this.onLogoClick}
          />
          <div className={styles.pageContent}>
            <Switch>
              {Routes.map(route => (
                <Route
                  key={route.path}
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                />)
              )}
              <Route component={NotFound} />
            </Switch>
          </div>
          <AppFooter />
        </main>
      </div>
    );
  }

}

export default withRouter(App);
