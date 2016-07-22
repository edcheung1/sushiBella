import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router"
import { Provider } from "react-redux"

import store from "./store"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="menu" component={Menu}></Route>
		</Route>
	</Router>
</Provider>, app);