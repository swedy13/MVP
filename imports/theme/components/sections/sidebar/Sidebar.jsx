import React, { Component } from 'react';

// Components
import Menu from '../../views/Menu.jsx';
import ListItem from '../../views/ListItem.jsx';
import FontIcon from '../../views/FontIcon.jsx';

/*<div className="sb">
	*<div className="sb-panel">
	*Panel
	*</div>
	*<ul className="vertical full-height full-width max-spacing sb-menu">
	*<Menu menuClass="vertical full-width regular sb-apps"
	*listClass="dark-toggle"
	*iconClass="larger white z1"
	*linkType="none"
	*listItems={sidebarList}
	*listType="icon"/>
	*<Menu menuClass="vertical full-width regular sb-utility"
	*listClass="dark-toggle"
	*iconClass="white z1"
	*linkType="none"
	*listItems={sidebarUtility}
	*listType="icon"/>
	*</ul>
	*</div>*/


/*<Menu style="vertical full-width regular sb-apps">
	*<ListItem style="dark-toggle"
	*content="Subscriptions"
	*icon={<FontIcon icon="subscriptions" vendor="fa fa-fw"/>}>
	*</Menu>
	*<Menu style="vertical full-width regular sb-utility">
	*<ListItem>
	*</ListItem>
	*</Menu>*/


export default class Sidebar extends Component {
				render() {
								return (
												<div className="sb">
																<div className="sb-panel">
																				Panel
																</div>
																<Menu style="vertical full-height full-width max-spacing sb-menu">
																				{this.renderList(sidebarApps)}
																</Menu>
																<Menu style="vertical full-height full-width max-spacing sb-menu">
																				{this.renderList(sidebarUtility)}
																</Menu>
												</div>
								);
				}

				renderList(list) {
								let result = [];

								list.map((item, key) => {
												result.push(<li key={key}>{item}</li>);
								});

								return result;
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
