import {membershipService} from '../_services/membershipService';
import { membershipConstants } from '../_helper/constants';

export const membershipPlanAction=()=>{
    return dispatch => {
        dispatch(fetchmembershipPlanBegin());      
        membershipService.getMembershipPlan()
            .then(function (response) {                                               
                dispatch(fetchmembershipPlanSuccess(response));
            })
            .catch(err=> {                
                dispatch(fetchmembershipPlanFailed(err));
                }
            );
            
    }
    
}


const fetchmembershipPlanBegin = ()=>{
    return{
        type: membershipConstants.GET_MEMBERSHIP_PLAN_REQUEST
    }
}

const fetchmembershipPlanSuccess = (res)=>{
    return{
        type: membershipConstants.GET_MEMBERSHIP_PLAN_SUCCESS,
        payload: res
    }
}

const fetchmembershipPlanFailed = (err)=>{
    return{
        type: membershipConstants.GET_MEMBERSHIP_PLAN_FAILURE,
        payload: err
    }
}