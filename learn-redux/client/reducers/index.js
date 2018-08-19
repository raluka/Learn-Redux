import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// TODO: why we need routing? what does it?
const rootReducer = combineReducers( {posts, comments, routing: routerReducer});

export default rootReducer;
