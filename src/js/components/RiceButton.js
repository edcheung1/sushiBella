import React from "react"
import { connect } from "react-redux"

import { setRiceFilter } from "../actions/filterActions.js"
import { setRiceSuggest } from "../actions/suggestActions.js"
import store from "../store"

@connect((store) => {
	return {
		filterRice: store.filters.isRiceInside,
		suggestRice: store.suggest.isRiceInside
	};
})
export default class FilterButton extends React.Component {
	constructor() {
		super();
		this.toggleFilter = this.toggleFilter.bind(this);
	}

	toggleFilter(event) {
		let isRiceInside = this.props.rice == "inside" ? true : false;

		if(this.props.type == "filter") {
			store.dispatch(setRiceFilter(this.props.rice));
		} else if(this.props.type == "suggest") {
			store.dispatch(setRiceSuggest(this.props.rice));
		}
	}

	render() {
		let active = "";
		if(this.props.type == "filter") {
			if(this.props.rice == "inside") {			
				active = this.props.filterRice === "inside" ? "active" : "";
			} else {
				active = this.props.filterRice === "outside" ? "active" : "";
			}
		} else if(this.props.type == "suggest") {
			if(this.props.rice == "inside") {			
				active = this.props.suggestRice === "inside" ? "active" : "";
			} else {
				active = this.props.suggestRice === "outside" ? "active" : "";
			}
		}
		

		return(
			<button class={"btn " + this.props.btnStyle +  " " + active} onClick={this.toggleFilter}>{this.props.rice}</button>
		);
	}
}