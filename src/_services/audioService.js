import axios from 'axios';
import {apiBaseUrl} from '../_helper/appConfig';

axios.defaults.baseURL = apiBaseUrl;

export const audioService = {
    getAudioCat,
    getAudioTypes,
    getAudioAlbums,
    getAudioPostId

};


function getAudioCat() {
    return axios.get(`/api/getCategory`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}
function getAudioTypes() {
    return axios.get(`/api/getType`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}
function getAudioAlbums() {
    return axios.get(`/api/getAlbum`)            
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}

function getAudioPostId(postType,id) {
    let fd= new FormData();
        fd.set('postType',postType);
        fd.append('id',id);
    return axios.post(`/api/getAudioPostId`,fd)           
        .then(
            response => response.data,
            error => console.log('Service Error: ', error)
        );           
}



