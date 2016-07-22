import React from "react"
import Isvg from "react-inlinesvg"

import { menuItems } from "../../data/menuItems"
import MenuItem from "../components/MenuItem"

export default class Menu extends React.Component {
	render() {
		let MenuComponents = menuItems.map((item, i) => {
			return (
				<MenuItem key={i} {...item} />
			);
		})

		return (
			<div id="home">
				<h1>Menu</h1>
				<div class="sushi-icon">
					<img src="../../icons/avocado.png" />
					{MenuComponents}
				</div>
			</div>
		);
	}
}