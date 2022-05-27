import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const login = user => dispatch => {
    return SessionApiUtil.login(user)
        .then(payload => dispatch(receiveCurrentUser(payload)))
        .fail(error => dispatch(receiveErrors(error)));
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(error => dispatch(receiveErrors(error)));
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
        .then(payload => dispatch(receiveCurrentUser(payload)))
        .fail(error => dispatch(receiveErrors(error)));
}

