import { combineReducers } from '@reduxjs/toolkit';

import userdata from '../components/elements/CardLogin/reducer';

const rootReducer = combineReducers({
    userdata,
});

export default rootReducer;
