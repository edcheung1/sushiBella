import React from "react"
import { Row, Col } from "react-bootstrap"

import MenuItem from "./MenuItem"

export default class MenuSection extends React.Component {
	render() {
		let filter = this.props.filter;

		let filteredItems = this.props.items.filter((item) => {
			for(var i=0; i<filter.length; i++) {
				if(item.name.toLowerCase().indexOf(filter[i]) < 0 && item.ingredients.indexOf(filter[i]) < 0) {
					return false;
				}
			}
			return true;
		})

		let items = filteredItems.map((item,i) => {
			return (
				<MenuItem key={i} {...item} />
			);
		})

		// Dyanmically wrap columns around items based on window width
		let itemCols = [];
		if(this.props.windowWidth >= 992) {
			itemCols = createItemCols(items, 3);
		} else if(this.props.windowWidth >= 768) {
			itemCols = createItemCols(items, 2);
		} else {
			itemCols = createItemCols(items, 1);
		}

		return (
			<Row>
				{ filteredItems.length == 0 ? 
					(<h5 class="sushi-empty-text">Sorry, nothing matches your desired ingredients.</h5>) : 
					(<div>{itemCols}</div>) }
			</Row>
		)
	}
}

function createItemCols(items, numCols) {
	let itemCols = [];
	for(var i=0; i<numCols; i++) {
		let itemListCol = [];
		let colLength = Math.ceil(items.length/numCols);

		for(var j=i*colLength; j < Math.min(items.length,(i*colLength) + colLength); j++) {
			itemListCol.push(items[j]);
		}

		let itemCol = (
			<Col md={4} sm={6} key={i}>
				{itemListCol}
			</Col>
		)
		itemCols.push(itemCol);
	}
	return itemCols;
}