import React from "react"
import { IndexLink, Link } from "react-router"
import { connect } from "react-redux"
import { setWindowWidth} from "../actions/windowWidthActions.js"
import store from "../store"

import BurgerMenu from "react-burger-menu"
import Radium from 'radium'

export default class Layout extends React.Component {
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
		// this.setState({
		// 	windowWidth: window.innerWidth
		// })
		store.dispatch(setWindowWidth(window.innerWidth));
	}

	render() {
		const Menu = BurgerMenu.fallDown;
		let RadiumLink = Radium(Link);

		return (
			<div id="outer-container">
				<Menu styles={styles} width={200} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
					<RadiumLink id="home" class="menu-item" to="/">Home</RadiumLink>
        			<RadiumLink id="menu" class="menu-item" to="/menu">Menu</RadiumLink>
        			<RadiumLink id="suggest" class="menu-item" to="/suggest">Suggest</RadiumLink>
				</Menu>

				<main id="page-wrap">
					<div class="container" style={{"padding": "0 2em 4em 0"}}>
						{this.props.children}
					</div>
				</main>
			</div>
			
		);
	}
}

const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '36px',
		top: '36px'
	},
	bmBurgerBars: {
		background: '#373a47'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenu: {
		background: '#373a47',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}
}