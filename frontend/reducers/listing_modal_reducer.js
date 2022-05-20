import { OPEN_MODAL, CLOSE_MODAL } from "../actions/listing_modal_actions";

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.listingId;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;