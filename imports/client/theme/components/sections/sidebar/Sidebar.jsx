import React, { Component } from 'react'

// Components
import Menu from '../../views/Menu.jsx'


export default class Sidebar extends Component {
				render() {
								return (
												<div className="sidebar">
																<div className="sidebar-menu">
																				<Menu listItems={sidebarList}/>
																</div>
																<div className="sidebar-panel">
																				Panel
																</div>
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
