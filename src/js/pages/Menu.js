import React from "react"
import { connect } from "react-redux"

import { normalRolls, houseRolls, nigiriSushi } from "../../data/menuItems"
import MenuSection from "../components/MenuSection"
import MenuFilters from "../components/MenuFilters"

@connect((store) => {
	return {
		windowWidth: store.windowWidth.windowWidth,
	};
})
export default class Menu extends React.Component {
	render() {
		return (
			<div>
				<h1>Menu</h1>
				<div class="col-sm-3">
					<h3>Ingredients</h3>
					<MenuFilters type="filter" windowWidth={this.props.windowWidth}/>
				</div>
				<div class="col-sm-9">
					<h3>Nigiri Sushi</h3>
						<MenuSection items={nigiriSushi} windowWidth={this.props.windowWidth}/>
					<h3>Sushi Rolls</h3>
						<MenuSection items={normalRolls} windowWidth={this.props.windowWidth}/>
					<h3>House Rolls</h3>
						<MenuSection items={houseRolls} windowWidth={this.props.windowWidth}/>
				</div>
			</div>
		);
	}
}