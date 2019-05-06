import { userConstants } from '../_helper/constants';
let localUser = localStorage.getItem('user');
console.log('localUser',localUser);
let user = localUser ? JSON.parse(localUser) : undefined;
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
    localStorage.setItem('user', JSON.stringify(action.user));
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};    
    default:
      return state;
  }
}