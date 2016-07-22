export default function reducer(state={
	name: '',
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch(action.type) {
		case "FETCH_TWEETS": {
			return {...state, fetching: true}
		}

	}


	return state;
}