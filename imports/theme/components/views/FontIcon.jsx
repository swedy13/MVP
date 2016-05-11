import React, { Component, PropTypes } from 'react'


export default class FontIcon extends Component {
				render() {
								const { icon, style, vendor } = this.props;

								const props			= style ? style : '';
								let   app     = '';

								if (vendor.includes('fa')) {
												app = transform[icon];
								}

								return (
												<i className={`${app} ${props} ${vendor}`}></i>
								)
				}
}


FontIcon.propTypes = {
				icon: PropTypes.string,
				style: PropTypes.string,
 			vendor: PropTypes.string,
}

FontIcon.defaultProps = {
				icon: '',
				style: '',
				vendor: 'fa',
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
