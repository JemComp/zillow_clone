import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessions_errors_reducer";
import ListingErrorsReducer from "./listing_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    listing: ListingErrorsReducer
})

export default errorsReducer;