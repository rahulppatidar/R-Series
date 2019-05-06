import axios from 'axios';
import {apiBaseUrl} from '../_helper/appConfig';

axios.defaults.baseURL = apiBaseUrl;

export const membershipService = {
    getMembershipPlan,  
};


function getMembershipPlan() {   
        return axios.get(`/api/getMembership`)            
            .then(function (res) {
                const membership= res.data;                             
                if(membership.action ==='success'){
                    return membership;
                }                             
            });           
}