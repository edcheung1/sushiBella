import React from "react"

import { normalRolls, houseRolls, nigiriSushi } from "../../data/menuItems"
import MenuSection from "../components/MenuSection"
import MenuFilters from "../components/MenuFilters"

export default class Menu extends React.Component {
	constructor() {
		super();
		this.state ={
			windowWidth: window.innerWidth
		}
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize(event) {
		this.setState({
			windowWidth: window.innerWidth
		})
	}

	render() {
		return (
			<div class="container">
				<h1>Menu</h1>
				<div class="row">
					<h3>Ingredients</h3>
					<MenuFilters type="filter"/>
				</div>
				<div class="row" style={{"paddingRight": "4em"}}>
					<h3>Nigiri Sushi</h3>
						<MenuSection items={nigiriSushi} windowWidth={this.state.windowWidth}/>
					<h3>Sushi Rolls</h3>
						<MenuSection items={normalRolls} windowWidth={this.state.windowWidth}/>
					<h3>House Rolls</h3>
						<MenuSection items={houseRolls} windowWidth={this.state.windowWidth}/>
				</div>
			</div>
		);
	}
}