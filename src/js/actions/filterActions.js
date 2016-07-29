export function setIngredientFilter(filter) {
	return {
		type: "SET_INGREDIENT_FILTER",
		payload: {
			filter
		}
	}
}

export function setRiceFilter(isRiceInside) {
	return {
		type: "SET_RICE_FILTER",
		payload: {
			isRiceInside
		}
	}
}