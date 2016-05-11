import React, { Component } from 'react'

// Components
import Navbar		from  './Navbar.jsx'
import NavSub		from './NavSub.jsx'
import NavMenu from './NavMenu.jsx'


export default class Nav extends Component {
				render() {
								return this.getDevice();
				}

				getDevice() {
								let device = this.props.deviceType;

								if (device === 'desktop') {
												return (
																<div className="nav">
																				<Navbar/>
																				<NavMenu/>
																</div>
												);
								}

								else {
												return (
																<div className="nav">
																				<Navbar/>
																				<NavSub deviceType={device}/>
																				<NavMenu/>
																</div>
												);
								}
				}
}
