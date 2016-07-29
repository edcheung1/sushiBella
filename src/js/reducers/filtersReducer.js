export default function reducer(state={
	filters: [],
	isRiceInside: null
}, action) {
	switch(action.type) {
		case "SET_INGREDIENT_FILTER": {
			let index = state.filters.indexOf(action.payload.filter);
			let newFilters = state.filters.slice();

			if(index >= 0) {
				newFilters.splice(index,1);
			} else {
				newFilters.push(action.payload.filter);
			}
			// return newState;
			return {...state, filters: newFilters};
		}

		case "SET_RICE_FILTER": {
			if(state.isRiceInside === action.payload.isRiceInside) {
				return {...state, isRiceInside: null};
			} else {
				return {...state, isRiceInside: action.payload.isRiceInside};
			}
		}
	}


	return state;
}