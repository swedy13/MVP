import React, { Component } from 'react';

// Components
import Nav					from './components/sections/nav/Nav.jsx';
import Body				from './components/sections/body/Body.jsx';
import Sidebar from './components/sections/sidebar/Sidebar.jsx';
import Footer		from './components/sections/footer/Footer.jsx';


export default class Theme extends Component {
				constructor() {
								super();
								this.state = {width: 0};
								this.updateDimensions = this.updateDimensions.bind(this);
				}

    render() {
        return this.getDevice();
    }

				getDevice() {
								var width = this.state.width;

								if (width <= 700) {
												return (
																<div className="mobile">
																				<Nav deviceType={"mobile"}/>
																				<Body/>
																				<Footer/>
																</div>
												);
								}

								else if (width <= 1024) {
												return (
																<div className="tablet">
																				<Nav deviceType={"tablet"}/>
																				<Body/>
																				<Sidebar/>
																				<Footer/>
																</div>
												);
								}

								else {
												return (
																<div className="desktop">
																				<Nav deviceType={"desktop"}/>
																				<Body/>
																				<Sidebar/>
																				<Footer/>
																</div>
												);
								}
				}

				updateDimensions() {
        this.setState({width: $(window).width()});
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
