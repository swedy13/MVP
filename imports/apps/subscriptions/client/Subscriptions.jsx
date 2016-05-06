import React, { Component } from 'react';

// Components
import Feed from './components/feed/Feed.jsx';
import Filters from './components/filters/Filters.jsx'


export default class Subscriptions extends Component {
				render() {
								return this.renderLayout();
				}

				renderLayout() {
								let width = this.props.width;

								// Mobile
								if (width <= 736) {
												return (
																<div className="main subscriptions">
																				<div className="content">
																								<Feed/>
																				</div>
																</div>
												);
								}

								// Tablet
								else if (width > 737 && width < 1025) {
												return (
																<div className="main subscriptions">
																				<div className="content">
																								<Feed/>
																				</div>
																</div>
												);
								}

								// Desktop
								else {
												return (
																<div className="main subscriptions">
																				<div className="left-rail">
																								<Filters/>
																				</div>
																				<div className="content">
																								<Feed/>
																				</div>
																				<div className="right-rail">
																								Right Rail
																				</div>
																</div>
												);
								}
				}
}
