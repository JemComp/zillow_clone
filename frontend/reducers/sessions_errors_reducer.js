import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from "../actions/session_actions.js";

const sessionErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return [...action.errors.responseJSON];
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        
        default:
            return state;
    }
}

export default sessionErrorsReducer;