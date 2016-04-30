import React, { Component } from 'react'

//  Comonents
import Menu from '../../views/menus/Menu.jsx'


export default class NavSub extends Component {
				render() {
								return (
												<div className="submenu">
																<Menu listItems={subMenu}/>
												</div>
								)
				}
}


subMenu = [
				'Subscriptions',
				'Top Scores',
				'Sign In'
]
