
import { combineReducers } from 'redux';
import {authentication} from './authenticationReducer';
import {alert} from './alertReducer';
import {audioReducer} from './audioReducer';
import {videoReducer} from './videoReducer';
import {userReducer} from './userReducer';
import {membershipReducer} from './membershipReducer';
import {searchReducer} from './searchReducer';
import {playerReducer} from './playerReducer';

const RootReducer = combineReducers({
    authentication,
    alert,
    audioReducer,
    videoReducer,
    userReducer,
    membershipReducer,
    searchReducer,
    playerReducer 
});

export default RootReducer;