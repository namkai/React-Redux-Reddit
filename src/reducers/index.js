import {combineReducers} from 'redux';
import {redditReducer} from './reddit_reducers';

const rootReducer = combineReducers({
    data: redditReducer
});

export default rootReducer;
