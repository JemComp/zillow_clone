import {RECEIVE_LISTING_ERRORS, CLEAR_ERRORS } from "../actions/listing_actions.js";

const ListingErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTING_ERRORS:
            return [...action.errors.responseJSON];
        case CLEAR_ERRORS:
            return [];
        
        default:
            return state;
    }
}

export default ListingErrorsReducer;