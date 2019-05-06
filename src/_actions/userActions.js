import { userConstants } from '../_helper/constants';
import { userService } from '../_services/userService';
import { alertActions } from '../_actions/alertActions';
import history from '../_helper/history';


export const userActions = {
    login,
    logout, 
    signup,
    updateProfileImage,
    getSingleUser,
    checkCurrentPass,
    clearCurrentPassInStore,
    updatePassword,
    updateProfile  
    
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        console.log("Login Action",username,password);
        userService.login(username, password)
            .then(
                user => {
                    console.log("Login Success",user); 
                    dispatch(success(user));
                    history.push(`${process.env.PUBLIC_URL}/user-profile`);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push(`${process.env.PUBLIC_URL}/login`);
    return { type: userConstants.LOGOUT };
}

function signup(user){
    return dispatch => {
        dispatch(request(user));
        userService.signup(user)
        .then(
            user => {
                dispatch(success(user));
                dispatch(alertActions.success(user.message));
                setTimeout(()=>{
                    history.push(`${process.env.PUBLIC_URL}/login`);
                },1000);
                               
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    };

    function request(user){ return {type: userConstants.REGISTER_REQUEST, payload:user}}
    function success(user) {return {type: userConstants.REGISTER_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.REGISTER_FAILURE, payload:error}}


}

function updateProfileImage(user){
    return dispatch => {      
            dispatch(request(user));
           return userService.userProfileImageUpdate(user)
            .then(
                user =>{
                    dispatch(success(user))
                    //dispatch(alertActions.success(user.message));
                    return Promise.resolve(user);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    }
    

    function request(user){ return {type: userConstants.UPDATE_PROFILE_PIC_REQUEST, payload:user}}
    function success(user) {return {type: userConstants.UPDATE_PROFILE_PIC_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.UPDATE_PROFILE_PIC_FAILURE, payload:error}}
}

function getSingleUser(user){
    return dispatch => {
        dispatch(request());
        userService.getUser(user)
            .then(
                user =>{                    
                    dispatch(success(user))                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    

    function request(){ return {type: userConstants.GET_USER_REQUEST}}
    function success(user) {return {type: userConstants.GET_USER_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.GET_USER_FAILURE, payload:error}}
}


function checkCurrentPass(user){

    return dispatch => {
        dispatch(request());
        userService.checkCurrentPass(user)
            .then(
                user =>{                    
                    dispatch(success(user))                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    

    function request(){ return {type: userConstants.CHECK_CURRENT_PASS_REQUEST}}
    function success(user) {return {type: userConstants.CHECK_CURRENT_PASS_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.CHECK_CURRENT_PASS_FAILURE, payload:error}}
}
function clearCurrentPassInStore(){
    return {type: userConstants.CHECK_CURRENT_PASS_CLEAR};
}

function updatePassword(user){

    return dispatch => {
        dispatch(request());
        userService.updatePassword(user)
            .then(
                user =>{
                    dispatch(alertActions.success(user.message));                    
                    dispatch(success(user));                    
                    setTimeout(()=>{
                        history.push(`${process.env.PUBLIC_URL}/user-profile`);
                    },1000);
                                       
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    

    function request(){ return {type: userConstants.UPDATE_PASSWORD_REQUEST}}
    function success(user) {return {type: userConstants.UPDATE_PASSWORD_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.UPDATE_PASSWORD_FAILURE, payload:error}}
}

function updateProfile(user){

    return dispatch => {
        dispatch(request());
       return  userService.updateProfile(user)
            .then(
                user =>{
                    dispatch(alertActions.success(user.message));                    
                    dispatch(success(user));  
                    return Promise.resolve(user); 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };
    

    function request(){ return {type: userConstants.UPDATE_PROFILE_REQUEST}}
    function success(user) {return {type: userConstants.UPDATE_PROFILE_SUCCESS, payload:user}}
    function failure(error) {return {type: userConstants.UPDATE_PROFILE_FAILURE, payload:error}}
}