import React, { Component } from 'react';

// Components
import Paper from '../../../../../client/theme/components/views/Paper.jsx';


export default class Post extends Component {
				render() {
								return this.renderContainer();
				}

				renderContainer() {
								return (
												<Paper containerClass=""
																			headerClass=""
																			headerContent=""
																			bodyClass=""
																			bodyContent={this.props.bodyContent}
																			footerClass=""
																			footerContent=""/>
								);
				}
}
