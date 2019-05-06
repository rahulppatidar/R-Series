import { alertConstants } from '../_helper/constants';

export const alert = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: alertConstants.SUCCESS,
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: alertConstants.ERROR,
        message: action.message
      };
    case alertConstants.INFO:
      return {
        type: alertConstants.INFO,
        message: action.message
      };
    case alertConstants.WARN:
      return {
        type: alertConstants.WARN,
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}