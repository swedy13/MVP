import React, { Component } from 'react'

//  Comonents
import Menu from '../../views/Menu.jsx'


export default class NavSub extends Component {
				render() {
								return (
												<div className="navsub">
																<Menu listItems={tabs} listType={this.getDevice()}/>
												</div>
								);
				}

				getDevice() {
								if (this.props.deviceType === 'mobile') {
												return 'icon';
								}
				}
}


tabs = [
				'Subscriptions',
				'Top Scores',
				'Sign In'
]
