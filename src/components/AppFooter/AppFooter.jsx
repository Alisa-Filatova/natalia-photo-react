import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import FooterFlowers from './footer.svg';
import './AppFooter.less';

const AUTHOR_SITE = 'alicedesign.ru';

const AppFooter = () => (
  <footer className="footer">
    <div className="content">
      <NavLink className="footer__logo" to={Routes[0].path}>
        <img src={FooterFlowers} height="80" alt="" />
      </NavLink>
      <p className="copyright">
        ©{new Date().getFullYear()} Natalia Biriouk
      </p>
      made by <a
          className="link"
          href={`http://${AUTHOR_SITE}`}
          target="_blank"
          rel="noopener noreferrer"
          >{AUTHOR_SITE}</a>
    </div>
  </footer>
);

export default AppFooter;
