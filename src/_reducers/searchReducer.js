import {searchConstants} from '../_helper/constants';

const initialState={
    searchResult:[],
    loading:false,
    error:null
}

export const searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case searchConstants.FETCH_SEARCH_ACTION_BEGIN:
            return{
                ...state,
                loading:true,
                error:null
            }
        case searchConstants.FETCH_SEARCH_ACTION_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                searchResult:action.payload
            }           
        case searchConstants.FETCH_SEARCH_ACTION_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}


