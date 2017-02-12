// import React from 'react';
// import axios from 'axios';
import {setFrontPage, getComments} from '../API/index';
export const COMMENT_FETCH = 'COMMENT_FETCH';
// export const REDDIT_FETCH = 'REDDIT_FETCH';

export let redditFetch = async () => {
    let frontPageData = await setFrontPage();

        return {
        type: REDDIT_FETCH,
        payload: frontPageData
    };
};

export let commentsFetch = async (comments) => {
    let commentsData = await getComments(comments);
        console.log(commentsData, `i'm the comments data in the action`);
        return {
        type: COMMENT_FETCH,
        payload: commentsData
    };
};
