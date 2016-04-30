var React = require('react');

// Components
var Nav					= require('./components/sections/nav/Nav.jsx');
var Body				= require('./components/sections/body/Body.jsx');
var Sidebar = require('./components/sections/sidebar/Sidebar.jsx');
var Footer		= require('./components/sections/footer/Footer.jsx');


var Theme = React.createClass({
				/*render() {
							return {this.getDevice()};
							}

							getDevice() {
							const width = this.state.width

							if (width <= 700) {
							return <div>Mobile</div>
							}
							else if (width <= 1024) {
							return <div>Tablet</div>
							}
							else {
							return <div>Desktop</div>
							}
							}*/
    render: function() {
        return <span>{this.state.width} x {this.state.height}</span>;
    },
    updateDimensions: function() {
        this.setState({width: $(window).width(), height: $(window).height()});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

module.exports = Theme;

/*<Nav/>
	*<Body/>
	*<Sidebar/>
	*<Footer/>*/
