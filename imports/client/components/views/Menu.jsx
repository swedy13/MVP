import React, { Component } from 'react'

// Components
import Icon from './Icon.jsx'


export default class Menu extends Component {
				render() {
								return (
												<ul className={styles.margin}>{this.list()}</ul>
								);
				}

				list() {
								let items = this.props.listItems;
								let list = [];

								items.map((item, key) => {
												list.push(
																<li className={item.replace(/\s+/g, '-').toLowerCase()} key={key}>
																				<Icon icon={item.replace(/\s+/g, '-').toLowerCase()}></Icon>
																				{item}
																</li>);
								});

								return list;
				}
}
