import React from 'react';
import { FooterFlowers } from '../../SvgImage';
import './AppFooter.less';

const AppFooter = () => (
  <footer className="footer">
    <div className="content">
      <img src={FooterFlowers} height="80" alt="" />
      <p className="copyright">© 2017-2019 Natalia Biriouk</p>
      made by <a
      className="link"
      href="https://alicedesign.ru"
      target="_blank"
      rel="noopener noreferrer"
      >
        alicedesign.ru
      </a>
    </div>
  </footer>
);

export default AppFooter;
