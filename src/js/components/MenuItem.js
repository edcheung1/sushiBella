import React from "react"
import Collapse from "react-collapse"

export default class MenuItem extends React.Component {
	constructor() {
		super();
		this.showIngredients = this.showIngredients.bind(this);
		this.state ={
			showIngredients: false
		}
	}

	showIngredients() {
		this.setState({
			showIngredients: !this.state.showIngredients
		})
	}

	render() {
		let ingredients = this.props.ingredients.map((ingredient, i) => {
			return (
				<div key={this.props.name + i} class="ingredient-icon">
					<img src={"../../icons/" + ingredient + ".png"} />
				</div>
			)
		})


		return (
			<div class="container sushi-menu-item" onClick={this.showIngredients}>
				{this.props.name}
				<Collapse isOpened={this.state.showIngredients}>
					{ingredients}
				</Collapse>
			</div>
		)
	}

}