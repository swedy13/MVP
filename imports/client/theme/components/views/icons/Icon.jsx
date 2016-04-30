import React, { Component } from 'react'


export default class Icon extends Component {
				render() {
								return (
												<i className={this.getClass()}></i>
								)
				}

				getClass() {
								let prop = this.props.icon;
								let icon = transform[prop];
								return `fa fa-fw ' + ${icon}`;
				}
}


transform = {
				// Apps
				'achievements'		: 'fa-star',
				'connections'			: 'fa-users',
				'my-scores'					: 'fa-line-chart',
				'profile'							: 'fa-user',
				'stats'									: 'fa-table',
				'subscriptions'	: 'fa-rss',
				'top-scores'				: 'fa-trophy',

				// Utility
				'exit'					: 'fa-sign-out',
				'help'					: 'fa-question',
				'settings'	: 'fa-gear'
}
