export function setIngredientSuggest(filter) {
	return {
		type: "SET_INGREDIENT_SUGGEST",
		payload: {
			filter
		}
	}
}

export function setRiceSuggest(isRiceInside) {
	return {
		type: "SET_RICE_SUGGEST",
		payload: {
			isRiceInside
		}
	}
}