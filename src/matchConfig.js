import Home from './components/Pages/Home';
import Ask from './components/Pages/Ask';
import Download from './components/Pages/Download';
import Prices from './components/Pages/Prices';
import Registration from './components/Pages/Registration';
import Login from './components/Pages/Login';
import About from './components/Pages/About';
import ForPartners from './components/Pages/ForPartners';
import Corporate from './components/Pages/Corporate';
import InFuture from './components/Pages/InFuture';

const matchConfig = {
	home: {
		path: '/',
		component: Home,
		exact: true,
	},
	ask: {
		path: '/infopages/ask',
		component: Ask,
	},
	download: {
		path: '/infopages/download',
		component: Download,
	},
	prices: {
		path: '/infopages/prices',
		component: Prices,
	},
	registration: {
		path: '/registration',
		component: Registration,
		exact: true,
	},
	login: {
		path: '/login',
		component: Login,
	},
	about: {
		path: '/infopages/about-company',
		component: About,
	},
	forpartners: {
		path: '/forpartners',
		component: ForPartners,
	},
	corporate: {
		path: '/corporate',
		component: Corporate,
	},
	dodimail: {
		path: '/dodimail',
		component: InFuture,
	},
	dodibox: {
		path: '/dodibox',
		component: InFuture,
	},
	dodioffice: {
		path: '/dodioffice',
		component: InFuture,
		local: {
			benefits: '#benefits',
			tariffs: '#tariffs',
			contacts: '#contacts',
		},
	},
	dodivoice: {
		path: '/dodivoice',
		component: InFuture,
		local: {
			benefits: '#benefits',
			tariffs: '#tariffs',
			contacts: '#contacts',
		},
	},
	termsofuse: {
		path: '/auth/registration/terms-of-use',
		component: InFuture,
	},
	privacypolicy: {
		path: '/auth/registration/privacy-policy',
		component: InFuture,
	},
	requestFromDodioffice: {
		path: '/infopages/request?from=dodioffice',
		component: InFuture,
	},
	requestFromDodivoice: {
		path: '/infopages/request?from=dodivoice',
		component: InFuture,
	},
	signIn: {
		path: '/login',
		component: InFuture,
	},
};

export const externalLinks = {
	facebookrussia: {
		path: 'https://www.facebook.com/dodidone.russia',
	},
	linkedininternational: {
		path: 'https://www.linkedin.com/company/dodidone-international',
	},
	dodicall: {
		path: 'http://dodidone.com/dodicall',
	},
	doditrade: {
		path: 'http://market.dodidone.com/',
	},
	settings: {
		path: 'http://pass.dodidone.com/settings',
	},
	logout: {
		path: 'http://pass.dodidone.com/logout',
	},
};

export default matchConfig;
