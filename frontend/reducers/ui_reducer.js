import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import listingModalReducer from "./listing_modal_reducer"

const uiReducer = combineReducers({
  modal: modalReducer,
  listingModal: listingModalReducer
});

export default uiReducer;