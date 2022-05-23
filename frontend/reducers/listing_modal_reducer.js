import { OPEN_LISTING_MODAL, CLOSE_LISTING_MODAL } from "../actions/listing_modal_actions";

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_LISTING_MODAL:
      return action.listingId;
    case CLOSE_LISTING_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;