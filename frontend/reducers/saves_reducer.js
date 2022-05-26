import {RECEIVE_SAVE, DELETE_SAVE} from '../actions/save_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const savesReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign({}, state, {[action.save.id]: action.save})
        case DELETE_SAVE:
            let nextState = Object.assign({}, state);
            delete nextState[action.saveId]
            return nextState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.saves)
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default savesReducer