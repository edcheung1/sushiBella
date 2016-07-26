import React from "react"

import FilterButton from "./FilterButton"

export default class MenuFilters extends React.Component {

	render() {
		let protein = ["tuna", "salmon", "shrimp", "eel", "squid", "crab", "egg"].map((item, i) => {
			return (
				<FilterButton key={i} type={this.props.type} ingredient={item} btnStyle={"btn-primary"} />
			);			
		});
		let vegetables = ["cucumber", "avocado", "tofu"].map((item, i) => {
			return (
				<FilterButton key={i} type={this.props.type} ingredient={item} btnStyle={"btn-success"} />
			);
		});


		return (
			<div class="row">
				<h5>Protein</h5>
					{protein}
				<br />
				<h5>Veggies</h5>
					{vegetables}
				<h5>Rice</h5>
					<FilterButton type={this.props.type} rice={"inside"} />
					<FilterButton type={this.props.type} rice={"outside"} />
			</div>
		);
	}
}