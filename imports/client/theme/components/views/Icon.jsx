import React, { Component } from 'react'


export default class Icon extends Component {
				render() {
								return (
												<i className={this.renderClass()}></i>
								)
				}

				renderClass() {
								let propClass					= this.getClass();
								let inherentClass = transform[this.props.data];

								return `fa fa-fw ${propClass} ${inherentClass}`;
				}

				// Returns any classes passed through the 'iconClass' props
				getClass() {
								let iconClass = this.props.iconClass;

								if (iconClass === undefined) {
												return '';
								}
								else {
												return iconClass;
								}
				}
}


// Converts the <li> data into a string (used as a class)
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
