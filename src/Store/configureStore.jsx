import {combineReducers, createStore, compose} from 'redux';

export let configure = (state = {}) => {
    let reduer = combineReducers({
        frontPageData: frontPageData,
        commentsData: commentsData
    });
    let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
}
