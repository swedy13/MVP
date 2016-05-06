import React, { Component } from 'react';


export default class Paper extends Component {
				render() {
								return (
												<div className="z1 paper">
																{this.renderHeader()}
																{this.renderBody()}
																{this.renderFooter()}
												</div>
								);
				}

				renderHeader() {
								let content = this.props.headerContent;

								if (content !== '') {
												return (
																<div className={this.props.headerClass}>{this.props.headerContent}</div>
												);
								}
				}

				renderBody() {
								let content = this.props.bodyContent;

								if (content !== '') {
												return (
																<div className={this.props.bodyClass}>{this.props.bodyContent}</div>
												);
								}
				}

				renderFooter() {
								let content = this.props.footerContent;

								if (content !== '') {
												return (
																<div className={this.props.footerClass}>{this.props.footerContent}</div>
												);
								}
				}
}
