import React, { Component, PropTypes } from 'react'


export default class FontIcon extends Component {
				render() {
								const { icon, style, vendor } = this.props;

								const props	= style ? style : '';
								let   app   = '';

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
				'Achievements'		: 'fa-star',
				'Connections'			: 'fa-users',
				'My Scores'					: 'fa-line-chart',
				'Profile'							: 'fa-user',
				'Stats'									: 'fa-table',
				'Subscriptions'	: 'fa-rss',
				'Top Scores'				: 'fa-trophy',

				// Utility
				'Sign In'		: 'fa-sign-in',
				'Sign Out'	: 'fa-sign-out',
				'Help'					: 'fa-question',
				'Settings'	: 'fa-gear'
}
