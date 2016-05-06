import React, { Component } from 'react';

// Components
import Icon from './Icon.jsx';


export default class ListItem extends Component {
				render() {
								return this.getContent();
				}

				getContent() {
								let list      = this.props.listClass;
								let icon      = this.props.iconClass;
								let text					 = this.props.textClass;
								let type						= this.props.listType;
								let item						= this.props.listItems;
								let stringify = item.replace(/\s+/g, '-').toLowerCase();

								// Icon-Only Menu
								if (type === 'icon') {
												return (
																<li className={`${list} ${stringify}`}>
																				<Icon iconClass={icon} data={stringify}></Icon>
																</li>
												);
								}

								// Text-Only Menu
								else if (type === 'text') {
												return (
																<li className={`${list} ${stringify}`}>
																				<p className={text}>{item}</p>
																</li>
												);
								}

								// Icon + Text Menu
								else {
												return (
																<li className={`${list} ${stringify}`}>
																				<Icon iconClass={icon} data={stringify}></Icon>
																				<p className={text}>{item}</p>
																</li>
												);
								}
				}
}
