import React, { Component } from 'react'

// Components
import Nav					from './components/sections/nav/Nav.jsx'
import Body				from './components/sections/body/Body.jsx'
import Sidebar from './components/sections/sidebar/Sidebar.jsx'
import Footer		from './components/sections/footer/Footer.jsx'


export default class AppContainer extends Component {
				render() {
								return (
												<div>
																<Nav/>
																<Body/>
																<Sidebar/>
																<Footer/>
												</div>
								)
				}
}
