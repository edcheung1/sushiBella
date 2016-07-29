export default function reducer(state={
	suggest: [],
	isRiceInside: null
}, action) {
	switch(action.type) {
		case "SET_INGREDIENT_SUGGEST": {
			let index = state.suggest.indexOf(action.payload.filter);
			let newFilters = state.suggest.slice();

			if(index >= 0) {
				newFilters.splice(index,1);
			} else {
				newFilters.push(action.payload.filter);
			}
			// return newState;
			return {...state, suggest: newFilters};
		}

		case "SET_RICE_SUGGEST": {
			if(state.isRiceInside === action.payload.isRiceInside) {
				return {...state, isRiceInside: null};
			} else {
				return {...state, isRiceInside: action.payload.isRiceInside};
			}
		}
	}
	return state;
}