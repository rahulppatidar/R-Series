import React from 'react';
import { Route } from "react-router-dom";
import {PUBLIC_URL} from './appConfig';
import Home from '../container/home/home';
import LoginPage from '../container/login/loginPage';
import SignupPage from '../container/signup/signupPage';
import SingleAudio from '../container/singleAudio/singleAudio';
import AudioCats from '../container/audioCats/audioCats';

import VideoHome from '../container/videoHome/videoHome';
import VideoCats from '../container/videoCats/videoCats';
import SingleVideo from '../container/singleVideo/singleVideo';

import UserProfile from '../container/profilePage/userProfile';
import ProfileUpdate from '../container/profilePage/prorileUpdate/profileUpdate';
import ChangePassword from '../container/profilePage/changePassword/changePassword';

import PrivateRoute from './privateRoute';
const AppRoutes = (
    <div className="app-routes">
        <Route exact path={`${PUBLIC_URL}/`} component={Home} />    
        <Route path={`${PUBLIC_URL}/login`} component={LoginPage} />
        <Route path={`${PUBLIC_URL}/signup`} component={SignupPage} />
        <Route path={`${PUBLIC_URL}/video`} exact component={VideoHome} />
        <Route path={`${PUBLIC_URL}/audio`} exact component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/audio/:catType/:catId`} render={({match})=>(
                <SingleAudio catType={match.params.catType} catId={match.params.catId} />
        )} />
        <Route path={`${process.env.PUBLIC_URL}/audio-cats/:catType`} render={({match})=>(
                <AudioCats catType={match.params.catType} />
        )} />
        <Route path={`${process.env.PUBLIC_URL}/video/:catType/:catId`} render={({match})=>(
                <SingleVideo catType={match.params.catType} catId={match.params.catId} />
        )} />
        <Route path={`${process.env.PUBLIC_URL}/video-cats/:catType`} render={({match})=>(
                <VideoCats catType={match.params.catType} />
        )} />
        <Route path={`${process.env.PUBLIC_URL}/change-password`} component={ChangePassword} />
        <Route path={`${process.env.PUBLIC_URL}/update-profile`} component={ProfileUpdate} />
        <PrivateRoute exact path={`${process.env.PUBLIC_URL}/user-profile`} component={UserProfile} />
    </div>
);

export default AppRoutes;