import React, { Component, PropTypes, Children } from 'react';

// Components
import ListItem from './ListItem.jsx';


/*renderList() {
	*				let list  = this.props.listClass;
	*				let icon		= this.props.iconClass;
	*				let text  = this.props.textClass;
	*				let link  = this.props.linkType;
	*				let items = this.props.listItems;
	*				let type		= this.props.listType;
	*				let data		= [];
	*
	*				items.map((item, key) => {
	*								data.push( <ListItem key={key}
	*listClass={list}
	*iconClass={icon}
	*textClass={text}
	*linkType={link}
	*listItems={item}
	*listType={type}/>);
	*				});
	*
	*				return data;
	*}*/

export default class Menu extends Component {
				render() {
								return (
												<ul className={this.props.style}>
																{this.renderItems()}
												</ul>
								);
				}

				show() {
								this.setState({active: true});
				}

				hide() {
								this.setState({active: false});
				}

				renderItems() {
								return Children.map(this.props.children, (item) => {
												if (!item) return item;

												if (item.type === ListItem) {
																return React.cloneElement(item, {
																				selected: typeof item.props.value !== 'undefined' &&
																				this.props.selectable && item.props.value === this.props.selected,
																				onClick: this.handleSelect.bind(this, item),
																});
												}
												else {
																return React.cloneElement(item);
												}
								});
				}

				handleSelect(item) {
								const {value, onClick} = item.props;

								this.setState({active: false});
				}

				componentWillUpdate(nextProps, nextState) {
								if (!this.state.active && nextState.active) {
												events.addEventsToDocument({click: this.handleDocumentClick});
								}
				}

				componentDidUpdate(prevProps, prevState) {
								if (prevState.active && !this.state.active) {
												if (this.props.onHide) this.props.onHide();
												events.removeEventsFromDocument({click: this.handleDocumentClick});
								}
								else if (!prevState.active && this.state.active && this.props.onShow) {
												this.props.onShow();
								}
				}

				componentWillUnmount() {
								if (this.state.active) {
												events.removeEventsFromDocument({click: this.handleDocumentClick});
								}
				}

				handleDocumentClick(event) {
								if (this.state.active && !events.targetIsDescendant(event, ReactDOM.findDOMNode(this))) {
												this.setState({active: false});
								}
				}
}


/*Menu.propTypes = {
	*				listClass: PropTypes.string,
	*				iconClass: PropTypes.string,
	*				textClass: PropTypes.string,
	*				linkType: PropTypes.string,
	*				listItems: PropTypes.array.isRequired,
	*				listType: PropTypes.string,
	*}
	**/
Menu.propTypes = {
				children: React.PropTypes.node,
				style: React.PropTypes.string,
				active: React.PropTypes.bool,
				onSelect: React.PropTypes.func,
				onShow: React.PropTypes.func,
				onHide: React.PropTypes.func,
}

Menu.defaultProps = {
				active: false,
}
