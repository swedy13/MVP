import React, { Component } from 'react'

//  Comonents
import Menu from '../../views/Menu.jsx'


export default class NavSub extends Component {
				render() {
								return (
												<div className="navsub">
																<Menu menuClass="short full-width horizontal dividers"
																						iconClass="bw left"
																						textClass="txt-lightest"
																						listItems={navsubList}
																						listType={this.getDevice()}/>
												</div>
								);
				}

				getDevice() {
								if (this.props.deviceType === 'mobile') {
												return 'icon';
								}
				}
}


navsubList = [
				'Subscriptions',
				'Top Scores',
				'Sign In'
]
