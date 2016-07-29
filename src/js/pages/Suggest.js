import React from "react"
import { connect } from "react-redux"

import MenuFilters from "../components/MenuFilters"

@connect((store) => {
	return {
		windowWidth: store.windowWidth.windowWidth,
	};
})
export default class Suggest extends React.Component {
	render() {
		return (
			<div>
				<h1>Make Your Own!</h1>
				<div class="col-sm-3">
					<MenuFilters type="suggest" windowWidth={this.props.windowWidth}/>
				</div>
			</div>

		);
	}
}