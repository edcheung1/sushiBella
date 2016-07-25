import React from "react"
import { Collapse, Row, Col } from "react-bootstrap"

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
					{ingredient}
				</div>
			)
		})

		return (
			<div class="sushi-menu-item" onClick={this.showIngredients}>
				<div class="sushi-menu-item-info">
					<div style={{"float": "left"}}>{this.props.name}</div>
					<div style={{"float": "right"}}>{this.props.price}</div>
				</div>
				<Collapse in={this.state.showIngredients} >
					<div>
						<img src="../../icons/page_img_sushi_01.jpg" />
						<div class="ingredients-panel">
							{ingredients}
						</div>
					</div>
				</Collapse>
			</div>
		)
	}

}