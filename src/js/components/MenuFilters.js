import React from "react"

import FilterButton from "./FilterButton"
import RiceButton from "./RiceButton"

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

		let vertical = this.props.windowWidth >= 768 ? "-vertical" : "";

		return (
			<div class="row">
				<h5>Protein</h5>
					<div class={"btn-group" + vertical} role="group">
						{protein}
					</div>
				<br />
				<h5>Veggies</h5>
					<div class={"btn-group" + vertical} role="group">
						{vegetables}
					</div>
				<h5>Rice</h5>
					<div class={"btn-group" + vertical} role="group">
						<RiceButton type={this.props.type} rice={"inside"} />
						<RiceButton type={this.props.type} rice={"outside"} />
					</div>
			</div>
		);
	}
}