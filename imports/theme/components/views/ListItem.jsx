import React, { Component, PropTypes } from 'react';

// Components
import { Link } from 'react-router';


export default class ListItem extends Component {
				render() {
								const {style, onClick, selected, disabled, ...others} = this.props;

								return (
												<li className={style} onClick={this.handleClick}>
																{this.renderContent()}
												</li>
								);
				}

				getContent() {
								const {content, children, icon} = this.props;

								console.log('Get');
								console.log(content);
								console.log(children);
								console.log(icon);

								let items = [];
								if (content !== undefined) {items.push(<p key="content">{content}</p>);}
								if (children !== undefined) {items.push(<p key="children">{children}</p>);}
								if (icon !== undefined) {items.push(icon);}

								return items;
				}

				renderContent() {
								const {link, icon, content, children} = this.props;

								console.log('Render');
								console.log(content);
								console.log(children);
								console.log(icon);

								let container;
								if (link === '') {
												container = (
																<button>
																				<span>
																								{this.getContent()}
																				</span>
																</button>
												);
								}
								else {
												container = (
																<Link to={`/${link}`}>
																				<span>
																								{this.getContent()}
																				</span>
																</Link>
												);
								}

								return container;
				}

				handleClick(event) {
								if (this.props.onClick && !this.props.disabled) {
												this.props.onClick(event, this);
								}
				}
}


ListItem.propTypes = {
				content: PropTypes.string,
				children: PropTypes.any,
				style: PropTypes.string,
				icon: PropTypes.any,
				link: PropTypes.string,
				onClick: PropTypes.func,
				selected: React.PropTypes.bool,
				disabled: PropTypes.bool,
}

ListItem.defaultProps = {
				style: '',
				link: '',
				disabled: false,
				selected: false,
}
