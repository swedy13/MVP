import React, { Component } from 'react';

// Components
import ListItem from './ListItem.jsx';


export default class Menu extends Component {
				render() {
								return (
												<ul className={this.props.menuClass}>{this.renderList()}</ul>
								);
				}

				renderList() {
								let list  = this.props.listClass;
								let icon		= this.props.iconClass;
								let text  = this.props.textClass;
								let items = this.props.listItems;
								let type		= this.props.listType;
								let data		= [];

								items.map((item, key) => {
												data.push( <ListItem key={key}
																																	listClass={list}
																																	iconClass={icon}
																																	textClass={text}
																																	listItems={item}
																																	listType={type}/>);
								});

								return data;
				}
}
