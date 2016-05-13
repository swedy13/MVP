import React, { Component } from 'react';

// Components
import Menu					from '../../views/Menu.jsx';
import ListItem from '../../views/ListItem.jsx';
import FontIcon from '../../views/FontIcon.jsx';


export default class Sidebar extends Component {
				render() {
								return (
												<div className="sb">
																<div className="sb-panel">
																				Panel
																</div>
																<Menu style="vertical full-height full-width max-spacing setc-mdr sb-menu">
																				<Menu style="vertical full-width regular sb-apps">
																								{this.renderList(sidebarApps)}
																				</Menu>
																				<Menu style="vertical full-width regular sb-apps">
																								{this.renderList(sidebarUtility)}
																				</Menu>
																</Menu>
												</div>
								);
				}

				renderList(list) {
								let results = [];

								list.map((item, key) => {
												let url = item.replace(/\s+/g, '-').toLowerCase();
												let icon = (<FontIcon key="icon"
																																		icon={item}
																																		style="larger white t-z1"
																																		vendor="fa fa-fw"/>);

												results.push(
																<ListItem key={key}
																										style="dark-toggle setc-mdr hover"
																										icon={icon}/>
												);
								});

								return results;
				}
}


sidebarApps = [
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
