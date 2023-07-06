import { userConstants } from '../_constant/index';

//--register user
export function registerUser(state = {}, action) {
  switch (action.type) {
    case userConstants.POST_USER_REQUEST:
      return {
        userData: false
      };

    case userConstants.POST_USER_SUCCESS:
      console.log("REDUCER ", action);
      return { userData:action.successAction};

    case userConstants.POST_USER_FAILURE:
      return {
        userData: false,
      };

    default:
      return state
  }
}

// Login
export function loginUser(state = {}, action) {
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          userData: false
        };
  
      case userConstants.LOGIN_SUCCESS:
        console.log("REDUCER ", action);
        return { userData:action.successAction};
  
      case userConstants.LOGIN_FAILURE:
        return {
          userData: false,
        };
  
      default:
        return state
    }
  }