import axios from 'axios';
import {apiBaseUrl} from '../_helper/appConfig';
import {searchConstants} from '../_helper/constants';

axios.defaults.baseURL = apiBaseUrl;

export const searchAction=(keyWord)=>{
    return dispatch => {
        dispatch(fetchsearchActionBegin());
        let fd= new FormData();
        fd.set('search_key',keyWord);        
        return axios.post(`/api/allSearch`,fd)
            .then(function (response) { 
                console.log("Search Response",response.data);               
                dispatch(fetchsearchActionSuccess(response.data));
            })
            .catch(function (error) {                
                dispatch(fetchsearchActionFailed(error));
            });
    }
    
}


const fetchsearchActionBegin = ()=>{
    return{
        type: searchConstants.FETCH_SEARCH_ACTION_BEGIN
    }
}

const fetchsearchActionSuccess = (res)=>{
    return{
        type: searchConstants.FETCH_SEARCH_ACTION_SUCCESS,
        payload: res
    }
}

const fetchsearchActionFailed = (err)=>{
    return{
        type: searchConstants.FETCH_SEARCH_ACTION_FAILED,
        payload: err
    }
}