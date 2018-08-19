import { combineREducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// TODO: why we need router? what does it?
const rootReducer = combineREducers( {posts, comments, router: routerReducer});

export default rootReducer;
