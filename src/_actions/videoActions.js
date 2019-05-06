import { videoConstants } from '../_helper/constants';
import { videoService } from '../_services/videoService';
import { alertActions } from '../_actions/alertActions';

export const videoActions = {
    getVideoCat,
    getVideoTypes,
    getVideoAlbums,
    getVideoPostId     
};

function getVideoCat() {
    return dispatch => {
        dispatch(request());        
        return videoService.getVideoCat()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));                        
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get video Categories!"));
                        return Promise.reject("Can't get video Categories!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: videoConstants.GET_CAT_REQUEST } }
    function success(res) { return { type: videoConstants.GET_CAT_SUCCESS, payload:res } }
    function failure(error) { return { type: videoConstants.GET_CAT_FAILURE, payload:error } }
}

function getVideoTypes() {
    return dispatch => {
        dispatch(request());        
        return videoService.getVideoType()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get video Types!"));
                        return Promise.reject("Can't get video Types!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: videoConstants.GET_TYPE_REQUEST } }
    function success(res) { return { type: videoConstants.GET_TYPE_SUCCESS, payload:res } }
    function failure(error) { return { type: videoConstants.GET_TYPE_FAILURE, payload:error } }
}

function getVideoAlbums() {
    return dispatch => {
        dispatch(request());        
        return videoService.getVideoAlbums()
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get video Albums!"));
                        return Promise.reject("Can't get video Albums!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: videoConstants.GET_ALBUM_REQUEST } }
    function success(res) { return { type: videoConstants.GET_ALBUM_SUCCESS, payload:res } }
    function failure(error) { return { type: videoConstants.GET_ALBUM_FAILURE, payload:error } }
}


function getVideoPostId(postType,id) {
    return dispatch => {
        dispatch(request());        
        return videoService.getVideoPostId(postType,id)
            .then(
                res => {
                    if(res.action==='success'){
                        dispatch(success(res));
                        console.log('Audio res',res);
                        return Promise.resolve(res);
                    }else{
                        dispatch(alertActions.error("Can't get videos!"));
                        return Promise.reject("Can't get videos!");                        
                    }        
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    return Promise.reject(error);
                }
            );
    };

    function request() { return { type: videoConstants.GET_CAT_VIDEO_REQUEST } }
    function success(res) { return { type: videoConstants.GET_CAT_VIDEO_SUCCESS, payload:res } }
    function failure(error) { return { type: videoConstants.GET_CAT_VIDEO_FAILURE, payload:error } }
}