import React, { Component } from 'react'

// Components
import Navbar		from  './Navbar.jsx'
import NavSub		from './NavSub.jsx'
import NavMenu from './NavMenu.jsx'


export default class Nav extends Component {
				render() {
								return (
												<div class="nav">
																<Navbar/>
																<NavSub/>
																<NavMenu/>
												</div>
								)
				}
}
