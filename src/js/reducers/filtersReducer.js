export default function reducer(state={
	filters: []
}, action) {
	switch(action.type) {
		case "SET_FILTER": {
			let index = state.filters.indexOf(action.payload.filter);
			let newFilters = state.filters.slice();

			if(index >= 0) {
				newFilters.splice(index,1);
			} else {
				newFilters.push(action.payload.filter);
			}
			// return newState;
			return {...state, filters: newFilters}
		}
	}


	return state;
}