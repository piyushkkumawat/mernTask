import { userConstants } from '../_constant/index';
import { userService } from '../services';
import * as commonAction from '../actions/commonActions';


export const userActions = {
    login,
    registration
};

//-- Login function
function login(data) {
    return dispatch => {
        dispatch(commonAction.request(userConstants.LOGIN_REQUEST, {data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(commonAction.success(userConstants.LOGIN_SUCCESS, user));
                },
                error => {
                    dispatch(commonAction.failure(userConstants.LOGIN_FAILURE, error));
                }
            );
    };
}


function registration(data) {
    return dispatch => {
        dispatch(commonAction.request(userConstants.POST_USER_REQUEST, {data }));
        userService.registration(data)
            .then(
                user => {
                    dispatch(commonAction.success(userConstants.POST_USER_SUCCESS, user));
                },
                error => {
                    dispatch(commonAction.failure(userConstants.POST_USER_FAILURE, error));
                }
            );
    };
}
