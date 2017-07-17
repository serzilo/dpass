import Home from './components/Pages/Home';
import Ask from './components/Pages/Ask';
import Download from './components/Pages/Download';
import Prices from './components/Pages/Prices';
import Registration from './components/Pages/Registration';
import Login from './components/Pages/Login';
import About from './components/Pages/About';
import ForPartners from './components/Pages/ForPartners';
import Corporate from './components/Pages/Corporate';

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
	{
		path: '/about-company',
		component: About,
	},
	{
		path: '/forpartners',
		component: ForPartners,
	},
	{
		path: '/corporate',
		component: Corporate,
	},
];

export default matchConfig;
