import { combineReducers } from 'redux';
import topics from './topic';
import common from './common';

const reducer = combineReducers({
    topics,
    common,
});

export default reducer;
