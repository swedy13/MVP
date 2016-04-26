import React, { Component } from 'react';

// Components
import Desktop from './layout/Desktop.jsx';
import Tablet		from './layout/Tablet.jsx';
import Mobile		from './layout/Mobile.jsx';


export default class Base extends Component {
				render() {
								return <span>{this.state.width} x {this.state.height}</span>;
				}

				updateDimensions() {
								this.setState({width: $(window).width(), height: $(window).height()});
				}

				componentWillMount() {
								this.updateDimensions();
				}

				componentDidMount() {
								window.addEventListener("resize", this.updateDimensions);
				}

				componentWillUnmount() {
								window.removeEventListener("resize", this.updateDimensions);
				}
}
