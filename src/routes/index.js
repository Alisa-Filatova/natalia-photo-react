import Home from './Home/Home';
import PortraitGallery from './PortraitGallery/PortraitGallery';
import NewBornGallery from './NewBornGallery/NewBornGallery';
import WeddingGallery from './WeddingGallery/WeddingGallery';
import FamilyGallery from './FamilyGallery/FamilyGallery';
import EventGallery from './EventGallery/EventGallery';
import MaternityGallery from './MaternityGallery/MaternityGallery';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';

const Routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/portrait',
    component: PortraitGallery,
    title: 'Portrait'
  },
  {
    path: '/newborn',
    component: NewBornGallery,
    title: 'Newborn',
  },
  {
    path: '/wedding',
    component: WeddingGallery,
    title: 'Wedding'
  },
  {
    path: '/family',
    component: FamilyGallery,
    title: 'Family',
  },
  {
    path: '/event',
    component: EventGallery,
    title: 'Event',
  },
  {
    path: '/maternity',
    component: MaternityGallery,
    title: 'Maternity',
  },
  {
    path: '/about',
    component: AboutMe,
    title: 'About me',
  },
  {
    path: '/contact',
    component: Contact,
    title: 'Contact',
  },
];

export default Routes;