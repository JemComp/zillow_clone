import {RECEIVE_SAVE, DELETE_SAVE} from '../actions/save_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { REMOVE_LISTING } from '../actions/listing_actions'

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
            return Object.assign({}, state, action.payload.saves);

        case REMOVE_LISTING:
            let saveState = Object.assign({}, state);
            let array = Object.keys(saveState).map(key=> state[key])
            //refactor this as well
                .filter(value=> value.listing_id === action.listingId);
            for (let i = 0; i < array.length; i++) {
                delete saveState[array[i].id];
                
            }
            debugger
            return saveState

        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default savesReducer