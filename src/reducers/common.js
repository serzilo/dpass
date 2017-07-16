import {
	SET_LOCALE,
	SET_COUNTRY,
} from '../constants/commonActions';

const INIT_STATE = {
	locale: 'ru',
	country: 'ru',
};

const commonReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_LOCALE: {
			return Object.assign({}, state, { locale: action.payload.locale });
		}
		case SET_COUNTRY: {
			return Object.assign({}, state, { country: action.payload.country });
		}
		default:
			return state;
	}
};

export default commonReducer;
