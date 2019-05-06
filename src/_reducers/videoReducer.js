import { videoConstants } from '../_helper/constants';


const initialState = {
    videoCats:[],
    videoTypes:[],
    videoAlbums:[],
    videos:[],
    video_banner:[],
    loading:false,
    error:null    
};

export const videoReducer = (state = initialState,action) => {
    switch(action.type){
        case videoConstants.GET_CAT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case videoConstants.GET_CAT_SUCCESS:            
              return {
                ...state,
                videoCats: action.payload.all_category
              };           
        case videoConstants.GET_CAT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case videoConstants.GET_CAT_VIDEO_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case videoConstants.GET_CAT_VIDEO_SUCCESS:            
              return {
                ...state,
                videos: action.payload.all_video,
                video_banner: action.payload.all_banner_data[0]
              };           
        case videoConstants.GET_CAT_VIDEO_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case videoConstants.GET_TYPE_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case videoConstants.GET_TYPE_SUCCESS:            
              return {
                ...state,
                videoTypes: action.payload.all_type
              };           
        case videoConstants.GET_TYPE_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case videoConstants.GET_ALBUM_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case videoConstants.GET_ALBUM_SUCCESS:            
              return {
                ...state,
                videoAlbums: action.payload.all_album
              };           
        case videoConstants.GET_ALBUM_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }       
        default:
            return state;
    }
}