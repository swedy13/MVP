import React, { Component } from 'react';
import RouteHandler from 'react-router';


export default class Body extends Component {
				render() {
								return (
												<div className='body'>
																{React.cloneElement(this.props.children, {width: this.props.width})}
												</div>
								);
				}
}
