import { fromJS } from 'immutable';

import {
	SET_LOCALE,
	SET_COUNTRY,
} from '../constants/commonActions';

const INIT_STATE = fromJS({
	locale: 'ru',
	country: 'ru',
});

const commonReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_LOCALE: {
			return state.set('locale', action.payload.locale);
		}
		case SET_COUNTRY: {
			return state.set('country', action.payload.country);
		}
		default:
			return state;
	}
};

export default commonReducer;
