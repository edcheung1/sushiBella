export function setSuggest(suggest) {
	return {
		type: "SET_SUGGEST",
		payload: {
			suggest: suggest
		}
	}
}