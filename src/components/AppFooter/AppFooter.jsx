import React from 'react';
import { FooterFlowers } from '../../SvgImage';
// import './AppFooter.less';

export default class AppFooter extends React.Component {

  render() {
    return (
      <footer className="root">
        <div className="content">
          <img src={FooterFlowers} height="80" />
          <p>© 2017 Natalia Biriouk</p>
          made by <a className="link" href="https://alicedesign.site" target="_blank">alicedesign.site</a>
        </div>
      </footer>
    );
  }
}
