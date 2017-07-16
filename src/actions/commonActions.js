import {
	SET_LOCALE,
	SET_COUNTRY,
} from '../constants/commonActions';

const commonActionCreator = {
	setLocale: (locale) => {
		return {
			type: SET_LOCALE,
			payload: {
				locale,
			}
		}
	},
	setCountry: (country) => {
		return {
			type: SET_COUNTRY,
			payload: {
				country,
			}
		}
	},
};

export default commonActionCreator;
