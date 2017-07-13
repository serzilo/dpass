import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

const matchConfig = [
  {
    path: '/',
    component: Home,
      exact: true
  },
  {
      path: '/about',
      component: About,
  },
  {
    path: '/contacts',
    component: Contacts,
  }
];

export default matchConfig;
