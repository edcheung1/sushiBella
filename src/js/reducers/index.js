import { combineReducers } from "redux"

import filters from "./filtersReducer"
import suggest from "./suggestReducer"
import windowWidth from "./windowWidthReducer"

export default combineReducers({
	filters,
	suggest,
	windowWidth
})