import Home from './components/Pages/Home';
import Ask from './components/Pages/Ask';
import Download from './components/Pages/Download';
import Prices from './components/Pages/Prices';
import Registration from './components/Pages/Registration';
import Login from './components/Pages/Login';

const matchConfig = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/ask',
        component: Ask,
    },
    {
        path: '/download',
        component: Download,
    },
    {
        path: '/prices',
        component: Prices,
    },
    {
        path: '/registration',
        component: Registration,
    },
    {
        path: '/login',
        component: Login,
    },
];

export default matchConfig;
