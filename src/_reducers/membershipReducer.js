import { membershipConstants } from '../_helper/constants';

const initialState={
  membershipPlan:[],
  loading:false,
  error:null
}

export const membershipReducer=(state=initialState,action)=>{
  switch(action.type){
      case membershipConstants.GET_MEMBERSHIP_PLAN_REQUEST:
          return{
              ...state,
              loading:true,
              error:null
          }
      case membershipConstants.GET_MEMBERSHIP_PLAN_SUCCESS:
          return{
              ...state,
              loading:true,
              error:null,
              membershipPlan:action.payload.all_membership
          }           
      case membershipConstants.GET_MEMBERSHIP_PLAN_FAILURE:
          return{
              ...state,
              loading:false,
              error:action.payload
          }
      default:
          return state;
  }
}
