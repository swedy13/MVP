import React, { Component } from 'react'

// Components
import Menu from '../../views/Menu.jsx'


export default class Sidebar extends Component {
				render() {
								return (
												<div className="sb">
																<div className="sb-panel">
																				Panel
																</div>
																<ul className="vertical full-height full-width max-spacing sb-menu">
																				<Menu menuClass="vertical full-width regular sb-apps"
																										listClass="app-bg"
																										iconClass="larger white z1"
																										listItems={sidebarList}
																										listType="icon"/>
																				<Menu menuClass="vertical full-width regular sb-utility"
																										listClass="app-bg"
																										iconClass="white z1"
																										listItems={sidebarUtility}
																										listType="icon"/>
																</ul>
												</div>
								)
				}
}


sidebarList = [
				'Subscriptions',
				'Top Scores',
				'My Scores',
				'Stats',
				'Achievements',
				'Profile',
				'Connections'
]

sidebarUtility = [
				'Help'
]
