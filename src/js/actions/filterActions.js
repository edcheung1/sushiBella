export function setFilter(filter, isRiceInside) {
	return {
		type: "SET_FILTER",
		payload: {
			filter,
			isRiceInside
		}
	}
}