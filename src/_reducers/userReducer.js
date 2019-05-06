import { userConstants } from '../_helper/constants';


const initialState = {
    user:[],
    loading:false,
    error:null    
};
export const userReducer = (state = initialState,action) => {
    switch(action.type){
        case userConstants.GET_USER_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case userConstants.GET_USER_SUCCESS:                                
            localStorage.setItem('user', JSON.stringify(action.payload.userdetals[0]));
              return {
                ...state,
                user: action.payload.userdetals[0]
              };           
        case userConstants.GET_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case userConstants.UPDATE_PROFILE_PIC_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case userConstants.UPDATE_PROFILE_PIC_SUCCESS:
            let user={...state.user,filename: action.payload.image};
            localStorage.setItem('user', JSON.stringify(user));
              return {
                ...state,
                user:{...user,filename: action.payload.image}
              };           
        case userConstants.UPDATE_PROFILE_PIC_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case userConstants.CHECK_CURRENT_PASS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case userConstants.CHECK_CURRENT_PASS_SUCCESS:
             state = {
                ...state,                
                loading:false,
                error:null,
                currentPassUser:action.payload.userdetals
            };                  
            return state;           
        case userConstants.CHECK_CURRENT_PASS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            } 
        case userConstants.CHECK_CURRENT_PASS_CLEAR:
            return{
                ...state,
                loading:false,
                error:null,
                currentPassUser:null
            }
        case userConstants.UPDATE_PROFILE_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case userConstants.UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null
            }           
        case userConstants.UPDATE_PROFILE_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }        
        default:
            return state;
    }
}