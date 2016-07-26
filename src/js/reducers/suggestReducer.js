export default function reducer(state={
	suggest: []
}, action) {
	switch(action.type) {
		case "SET_SUGGEST": {
			let index = state.suggest.indexOf(action.payload.suggest);
			let newSuggest = state.suggest.slice();

			if(index >= 0) {
				newSuggest.splice(index,1);
			} else {
				newSuggest.push(action.payload.suggest);
			}
			// return newState;
			return {...state, suggest: newSuggest}
		}
	}


	return state;
}