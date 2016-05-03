import React, { Component } from 'react';

// Components
import ListItem from './ListItem.jsx';


export default class Menu extends Component {
				render() {
								return (
												<ul>{this.renderList()}</ul>
								);
				}

				renderList() {
								let items = this.props.listItems;
								let type		= this.props.listType;
								let list		= [];

								items.map((item, key) => {
												list.push( <ListItem key={key} listItems={item} listType={type} /> );
								});

								return list;
				}
}
