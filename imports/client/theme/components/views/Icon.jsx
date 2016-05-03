import React, { Component } from 'react'


export default class Icon extends Component {
				render() {
								return (
												<i className={this.getClass()}></i>
								)
				}

				getClass() {
								let type = this.getType();
								let data = this.props.data;
								let icon = transform[data];

								return `fa fa-fw ${icon} ${type}`;
				}

				getType() {
								let type = this.props.iconType;

								if (type === undefined) {
												return 'default';
								}
								else {
												return type;
								}
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
				'sign-in'		: 'fa-sign-in',
				'sign-out'	: 'fa-sign-out',
				'help'					: 'fa-question',
				'settings'	: 'fa-gear'
}
