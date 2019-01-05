import React from 'react';
import { FooterFlowers } from '../../SvgImage';
import './AppFooter.less';

export default class AppFooter extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="content">
          <img src={FooterFlowers} height="80" alt="" />
          <p className="copyright">© 2017-2019 Natalia Biriouk</p>
          made by <a className="link" href="https://alicedesign.site" target="_blank" rel="noopener noreferrer">alicedesign.site</a>
        </div>
      </footer>
    );
  }
}
