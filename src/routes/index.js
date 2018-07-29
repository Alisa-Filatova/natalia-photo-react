import Home from './Home/Home';
import PortraitGallery from './PortraitGallery/PortraitGallery';
// import { getHomeUrl, getPortraitURL } from '../links';

const Routes = [
  {
    exact: true,
    path: 'home',
    component: Home,
  },
  {
    exact: true,
    path: '/portrait',
    component: PortraitGallery,
  },
];

export default Routes;