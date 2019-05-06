import axios from 'axios';
import {apiBaseUrl} from '../_helper/appConfig';

axios.defaults.baseURL = apiBaseUrl;

export const userService = {
    login,
    logout,
    signup,
    userProfileImageUpdate,
    getUser,
    checkCurrentPass,
    updatePassword,
    updateProfile 

};


function login(username, password) {

        let fd= new FormData();
        fd.set('email',username);
        fd.append('password',password);

        return axios.post(`/api/login`,fd)
            .then(handleResponse)
            .then(function (user) { 
                console.log("Login Res",user);
                if(user.message!=='success'){
                    logout();                   
                }
                return user.userdetals[0];               
            })
           
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function signup(user){
    let fd = new FormData();

    fd.set('email',user.email);
    fd.append('password',user.password);
    fd.append('name',user.name);
    fd.append('mobile',user.mobile);
    fd.append('user_level','1');

    return axios.post('/api/Registration',fd)
        .then(handleResponse)

}

function userProfileImageUpdate(user){
    let fd = new FormData();
    fd.set('id',user.id);
    fd.append('profile_picture',user.file);
    return axios.post(`/api/updateProfileimage`,fd)
        .then(handleResponse)
}


function getUser(user){
    console.log("get This User",user);
    let fd = new FormData();
    fd.set('id',user.id)
    
    return axios.post(`/api/getSingleUser`,fd)
        .then(handleResponse)

}

function checkCurrentPass(user){
    console.log('checking for',user);
    let fd = new FormData();
    fd.set('password',user.pass);
    fd.append('id',user.id);    
    return axios.post(`/api/checkOldPassword`,fd)
        .then(handleResponse)

}

function updatePassword(user){
    let fd =new FormData();
    fd.set('id',user.id);
    fd.append('password',user.password)
    return axios.post(`/api/updatePassword`,fd)
        .then(handleResponse)
}

function updateProfile(user){
    let fd =new FormData();
    fd.set('id',user.id);
    fd.append('email',user.email);
    fd.append('name',user.name);
    fd.append('mobile',user.mobile);

    return axios.post(`/api/updateProfile`,fd)
        .then(handleResponse)
}

function handleResponse(response) {
    console.log("Login Service res",response);  
        const data = response.data;
        if (data.message !== 'success') {
            console.log("Failed Message",data.message);
            
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();                
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        return data;    
}