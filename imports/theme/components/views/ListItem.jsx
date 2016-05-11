import React, { Component, PropTypes } from 'react';

// Components
import { Link } from 'react-router';
import FontIcon from './FontIcon.jsx';


export default class ListItem extends Component {
				handleClick(event) {
								if (this.props.onClick && !this.props.disabled) {
												console.log(this, event);
												this.props.onClick(event, this);
								}
				}

				render() {
								const {content, children, style, icon,
															onClick, selected, disabled, ...others} = this.props;

								return (
												<li className={style} onClick={this.handleClick}>
																{icon ? icon : null}
																<span>{content}</span>
																{children}
												</li>
								);
				}

				getContent() {
								// FontIcon-Only Menu
								if (type === 'icon') {
												return (
																<span>
																				<FontIcon style={icon} icon={stringify}></FontIcon>
																</span>
												);
								}

								// Text-Only Menu
								else if (type === 'text') {
												return (
																<span>
																				<p className={text}>{item}</p>
																</span>
												);
								}

								// FontIcon + Text Menu
								else {
												return (
																<span>
																				<FontIcon iconClass={icon} data={stringify}></FontIcon>
																				<p className={text}>{item}</p>
																</span>
												);
								}
				}
}


ListItem.propTypes = {
				content: PropTypes.string.isRequired,
				children: PropTypes.any,
				style: PropTypes.string,
				icon: PropTypes.element,
				onClick: PropTypes.func,
				selected: React.PropTypes.bool,
				disabled: PropTypes.bool,
}

ListItem.defaultProps = {
				style: '',
				disabled: false,
				selected: false,
}
