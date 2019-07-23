import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import FooterFlowers from './footer.svg';
import './AppFooter.less';

const AppFooter = () => (
  <footer className="footer">
    <div className="content">
      <NavLink className="footer__logo" to={Routes[0].path}>
        <img src={FooterFlowers} height="80" alt="" />
      </NavLink>
      <p className="copyright">© 2019 Natalia Biriouk</p>
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
