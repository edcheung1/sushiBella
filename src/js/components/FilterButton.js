import React from "react"

import { setFilter } from "../actions/filterActions.js"
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
		store.dispatch(setFilter(this.props.filter))
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		let active = this.state.active ? "active" : "";

		return(
			<button class={"btn " + this.props.btnStyle +  " " + active} onClick={this.toggleFilter}>{this.props.filter}</button>
		);
	}
}