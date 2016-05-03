import React, { Component } from 'react';

// Components
import Icon from './Icon.jsx';


export default class ListItem extends Component {
				render() {
								return this.getContent();
				}

				getContent() {
								let type						= this.props.listType;
								let item						= this.props.listItems;
								let stringify = item.replace(/\s+/g, '-').toLowerCase();

								// Icon-Only Menu
								if (type === 'icon') {
												return (
																<li className={stringify}>
																				<Icon iconType={'large'} data={stringify}></Icon>
																</li>
												);
								}

								// Text-Only Menu
								else if (type === 'text') {
												return (
																<li className={stringify}>
																				{item}
																</li>
												);
								}

								// Icon + Text Menu
								else {
												return (
																<li className={stringify}>
																				<Icon data={stringify}></Icon>
																				{item}
																</li>
												);
								}
				}
}
