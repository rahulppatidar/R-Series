import {playerConstants} from '../_helper/constants';

const initialState={
    loading:false,
    playing:false,
    pause:false,
    playingTo:{},
    currentIndex:0,
    currentSrc:null

};

export const playerReducer = (state=initialState,action) =>{
    switch(action.type){
        case playerConstants.PLAYER_START:
            return{
                ...state,
                loading:true,
                playing:false,
                pause:false,
                playingTo:{},
                currentSrc:null
                
            }
        case playerConstants.PLAYER_PLAYING:
            return{
                ...state,
                loading:false,
                playing:true,
                pause:false,          
                currentIndex:action.currentIndex,
                currentSrc:action.currentSrc
                
            }
        case playerConstants.PLAYER_PAUSE:
            return{
                ...state,
                loading:false,
                playing:false,
                pause:true,   
                
            }
        case playerConstants.PLAYER_CLEAR:
            return{
                ...state,
                loading:false,
                playing:false,
                pause:false,
                playingTo:{},
                currentSrc:null
                
            }
        default:
            return state
    }   
}