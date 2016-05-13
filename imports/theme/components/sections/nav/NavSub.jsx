import React, { Component } from 'react'

//  Comonents
import Menu from '../../views/Menu.jsx';
import ListItem from '../../views/ListItem.jsx';
import FontIcon from '../../views/FontIcon.jsx';


export default class NavSub extends Component {
				render() {
								return (
												<div className="navsub">
																<Menu style="short full-width horizontal dividers">
																				{this.renderList(navsubList)}
																</Menu>
												</div>
								);
				}

				renderList(list) {
								let results = [];

								list.map((item, key) => {
												let url = item.replace(/\s+/g, '-').toLowerCase();
												let icon = ( <FontIcon key="icon"
																																			icon={item}
																																			style="larger white tc-95"
																																			vendor="fa fa-fw"/>);

												results.push(
																<ListItem key={key}
																										style="dark-toggle setc-ltr hover"
																										icon={icon}
																										content={this.getDevice()}
																/>
												);
								});

								return results;
				}

				getDevice() {
								if (this.props.deviceType === 'mobile') {
												return this.props.content;
								}
				}
}


navsubList = [
				'Subscriptions',
				'Top Scores',
				'Sign In'
]
