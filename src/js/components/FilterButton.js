import React from "react"

import { setFilter } from "../actions/filterActions.js"
import { setSuggest } from "../actions/suggestActions.js"
import store from "../store"

export default class FilterButton extends React.Component {
	constructor() {
		super();

		this.toggleFilter = this.toggleFilter.bind(this);
		this.state = {
			active: false
		}
	}

	toggleFilter(event) {
		let isRiceInside = this.props.rice == "inside" ? true : false;

		if(this.props.type == "filter") {
			store.dispatch(setFilter(this.props.ingredient, isRiceInside));
		} else if(this.props.type == "suggest") {
			store.dispatch(setSuggest(this.props.ingredient, isRiceInside))
		}
		
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		let active = this.state.active ? "active" : "";

		return(
			<button class={"btn " + this.props.btnStyle +  " " + active} onClick={this.toggleFilter}>{this.props.ingredient || this.props.rice}</button>
		);
	}
}