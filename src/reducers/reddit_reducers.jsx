import{ COMMENT_FETCH, REDDIT_FETCH} from '../actions/index';


const INITIAL_STATE = {
    frontPage: [],
    comments: []
}

export let redditReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDDIT_FETCH:
            return {
                ...state,
                frontPage: action.payload
            };
            case COMMENT_FETCH:
                return {
                    ...state,
                comments: action.payload
            };
            default:
                return state;
    }
};

// export let commentsReducer = (state = {commentsData: []}, action) => {
//     switch (action.type) {
//         case "COMMENT_FETCH":
//             return {
//                 ...state,
//             commentsData: action.payload
//         };
//         default:
//             return state;
//     }
// }
