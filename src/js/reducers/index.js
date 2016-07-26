import { combineReducers } from "redux"

import filters from "./filtersReducer"
import suggest from "./suggestReducer"

export default combineReducers({
	filters,
	suggest
})