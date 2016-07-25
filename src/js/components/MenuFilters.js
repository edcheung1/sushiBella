import React from "react"

import { Row } from "react-bootstrap"
import FilterButton from "./FilterButton"

export default class MenuFilters extends React.Component {

	render() {
		let protein = ["tuna", "salmon", "shrimp", "eel", "squid", "crab", "egg"].map((item, i) => {
			return (
				<FilterButton key={i} filter={item} btnStyle={"btn-primary"} />
			);
		});
		let vegetables = ["cucumber", "avocado", "tofu"].map((item, i) => {
			return (
				<FilterButton key={i} filter={item} btnStyle={"btn-success"} />
			);
		});


		return (
			<Row>
				<h5>Protein</h5>
					{protein}
				<br />
				<h5>Veggies</h5>
					{vegetables}
			</Row>
		);
	}
}