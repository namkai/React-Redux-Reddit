import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Comments from './components/Comments';
import FrontPage from './components/RedditList';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route path="/comments" component={Comments} />
    </Route>
);
