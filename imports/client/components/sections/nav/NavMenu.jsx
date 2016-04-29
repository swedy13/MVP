import React, { Component } from 'react'

// Components
import Menu from '../../views/Menu.jsx'


export default class NavMenu extends Component {
				render() {
								return (
												<div class="navmenu">
																<Menu listItems={navMenu}/>
																<Menu listItems={settingsMenu}/>
												</div>
								)
				}
}


navMenu = [
				'Subscriptions',
				'Top Scores',
				'My Scores',
				'Stats',
				'Profile',
				'Achievements',
				'Connections'
]

settingsMenu = [
				'Help',
				'Settings',
				'Exit'
]
