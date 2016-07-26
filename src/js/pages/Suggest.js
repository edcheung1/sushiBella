import React from "react"

import MenuFilters from "../components/MenuFilters"

export default class Suggest extends React.Component {
	render() {
		return (
			<div class="container">
				<h1>Make Your Own!</h1>
				<MenuFilters type="suggest"/>
			</div>

		);
	}
}