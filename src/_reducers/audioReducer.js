import { audioConstants } from '../_helper/constants';


const initialState = {
    cats:[],
    types:[],
    albums:[],
    audios:[],
    audio_banner:[],
    loading:false,
    error:null    
};

export const audioReducer = (state = initialState,action) => {
    switch(action.type){
        case audioConstants.GET_CAT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case audioConstants.GET_CAT_SUCCESS:            
              return {
                ...state,
                cats: action.payload.all_category
              };           
        case audioConstants.GET_CAT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case audioConstants.GET_CAT_AUDIO_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case audioConstants.GET_CAT_AUDIO_SUCCESS:            
              return {
                ...state,
                audios: action.payload.all_audio,
                audio_banner: action.payload.all_banner_data[0]
              };           
        case audioConstants.GET_CAT_AUDIO_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case audioConstants.GET_TYPE_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case audioConstants.GET_TYPE_SUCCESS:            
              return {
                ...state,
                types: action.payload.all_type
              };           
        case audioConstants.GET_TYPE_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case audioConstants.GET_ALBUM_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case audioConstants.GET_ALBUM_SUCCESS:            
              return {
                ...state,
                albums: action.payload.all_album
              };           
        case audioConstants.GET_ALBUM_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }       
        default:
            return state;
    }
}