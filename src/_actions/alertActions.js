import { alertConstants } from '../_helper/constants';
export const alertActions = {
    success,
    error,
    clear,
    info,
    warn
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function info(message) {
    return { type: alertConstants.INFO, message };
}

function warn(message) {
    return { type: alertConstants.WARN, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}