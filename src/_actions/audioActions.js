import { audioConstants } from '../_helper/constants';
import { audioService } from '../_services/audioService';
import { alertActions } from '../_actions/alertActions';

export const audioActions = {
    getAudioCat,
    getAudioTypes,
    getAudioAlbums,
    getAudioPostId     
};

function getAudioCat() {
    return dispatch => {
        dispatch(request());        
        return audioService.getAudioCat()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));                        
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get audio Categories!"));
                        return Promise.reject("Can't get audio Categories!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: audioConstants.GET_CAT_REQUEST } }
    function success(res) { return { type: audioConstants.GET_CAT_SUCCESS, payload:res } }
    function failure(error) { return { type: audioConstants.GET_CAT_FAILURE, payload:error } }
}

function getAudioTypes() {
    return dispatch => {
        dispatch(request());        
        return audioService.getAudioTypes()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get audio Types!"));
                        return Promise.reject("Can't get audio Types!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: audioConstants.GET_TYPE_REQUEST } }
    function success(res) { return { type: audioConstants.GET_TYPE_SUCCESS, payload:res } }
    function failure(error) { return { type: audioConstants.GET_TYPE_FAILURE, payload:error } }
}

function getAudioAlbums() {
    return dispatch => {
        dispatch(request());        
        return audioService.getAudioAlbums()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get audio Albums!"));
                        return Promise.reject("Can't get audio Albums!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: audioConstants.GET_ALBUM_REQUEST } }
    function success(res) { return { type: audioConstants.GET_ALBUM_SUCCESS, payload:res } }
    function failure(error) { return { type: audioConstants.GET_ALBUM_FAILURE, payload:error } }
}


function getAudioPostId(postType,id) {
    return dispatch => {
        dispatch(request());        
        return audioService.getAudioPostId(postType,id)
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        console.log('Audio res',res);
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get audios!"));
                        return Promise.reject("Can't get audios!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: audioConstants.GET_CAT_AUDIO_REQUEST } }
    function success(res) { return { type: audioConstants.GET_CAT_AUDIO_SUCCESS, payload:res } }
    function failure(error) { return { type: audioConstants.GET_CAT_AUDIO_FAILURE, payload:error } }
}