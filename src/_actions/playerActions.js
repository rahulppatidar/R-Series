import {playerConstants} from '../_helper/constants';

export const playerActions = {
    loading,
    play,
    pause,
    clear
};

function loading(){
    return{
        type: playerConstants.PLAYER_START
    }
}

function play(currentIndex,currentSrc){
    return{
        type: playerConstants.PLAYER_PLAYING,       
        currentIndex,
        currentSrc
    }
}

function pause(audio){
    return{
        type: playerConstants.PLAYER_PAUSE,
        payload: audio
    }
}

function clear(){
    return{
        type: playerConstants.PLAYER_CLEAR
    }
}
