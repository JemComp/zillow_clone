import {RECEIVE_LISTING_ERRORS} from "../actions/listing_actions.js";

const ListingErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTING_ERRORS:
            return [...action.errors.responseJSON];     
        default:
            return state;
    }
}

export default ListingErrorsReducer;