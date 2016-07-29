export default function reducer(state={
	windowWidth: window.innerWidth
}, action) {
	switch(action.type) {
		case "SET_WINDOW_WIDTH": {
			return {...state, windowWidth: action.payload.windowWidth};
		}
	}
	return state;
}