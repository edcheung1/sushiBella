import React from "react"
import { connect } from "react-redux"

import { setIngredientFilter } from "../actions/filterActions.js"
import { setIngredientSuggest } from "../actions/suggestActions.js"
import store from "../store"

@connect((store) => {
	return {
		filter: store.filters.filters,
		suggest: store.suggest.suggest
	};
})
export default class FilterButton extends React.Component {
	constructor() {
		super();
		this.toggleFilter = this.toggleFilter.bind(this);
	}

	toggleFilter(event) {
		if(this.props.type == "filter") {
			store.dispatch(setIngredientFilter(this.props.ingredient));
		} else if(this.props.type == "suggest") {
			store.dispatch(setIngredientSuggest(this.props.ingredient));
		}
	}

	render() {
		let active = ""
		if(this.props.type == "filter") {
			active = this.props.filter.indexOf(this.props.ingredient) < 0 ? "" : "active";
		} else if(this.props.type =="suggest") {
			active = this.props.suggest.indexOf(this.props.ingredient) < 0 ? "" : "active";
		}

		return(
			<button class={"btn " + this.props.btnStyle +  " " + active} onClick={this.toggleFilter}>{this.props.ingredient}</button>
		);
	}
}