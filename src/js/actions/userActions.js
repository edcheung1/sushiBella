export function fetchUser() {
	return {
		type: "FETCH_USER_FULFILLED",
		payload: {
			name: "Ed",
			age: 25
		}
	}
}

export function setUserName(name) {
	return {
		type: 'SET_USER_NAME',
		payload: name
	}
}