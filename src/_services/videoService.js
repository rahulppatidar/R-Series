import axios from 'axios';
import {apiBaseUrl} from '../_helper/appConfig';

axios.defaults.baseURL = apiBaseUrl;

export const videoService = {
    getVideoCat,
    getVideoType,
    getVideoAlbums,
    getVideoPostId

};


function getVideoCat() {
    return axios.get(`/api/getCategoryVideo`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}
function getVideoType() {
    return axios.get(`/api/getTypeVideo`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}
function getVideoAlbums() {
    return axios.get(`/api/getAlbumVideo`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}

function getVideoPostId(postType,id) {
    let fd= new FormData();
        fd.set('postType',postType);
        fd.append('id',id);
    return axios.post(`/api/getVideoPostId`,fd)           
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}



