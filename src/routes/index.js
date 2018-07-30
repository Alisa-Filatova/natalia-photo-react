import Home from './Home/Home';
import PortraitGallery from './PortraitGallery/PortraitGallery';
import NewBornGallery from './NewBornGallery/NewBornGallery';
import WeddingGallery from './WeddingGallery/WeddingGallery';
import FamilyGallery from './FamilyGallery/FamilyGallery';
import EventGallery from './EventGallery/EventGallery';
import MaternityGallery from './MaternityGallery/MaternityGallery';
import AboutMe from './AboutMe/AboutMe';
import Contact from './AboutMe/AboutMe';

const Routes = [
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    exact: true,
    path: '/portrait',
    component: PortraitGallery,
  },
  {
    exact: true,
    path: '/newborn',
    component: NewBornGallery,
  },
  {
    exact: true,
    path: '/wedding',
    component: WeddingGallery,
  },
  {
    exact: true,
    path: '/family',
    component: FamilyGallery,
  },
  {
    exact: true,
    path: '/event',
    component: EventGallery,
  },
  {
    exact: true,
    path: '/maternity',
    component: MaternityGallery,
  },
  {
    exact: true,
    path: '/about_me',
    component: AboutMe,
  },
  {
    exact: true,
    path: '/contact',
    component: Contact,
  },
];

export default Routes;