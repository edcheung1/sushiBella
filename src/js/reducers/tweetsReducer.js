export default function reducer(state={
	tweets: [],
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