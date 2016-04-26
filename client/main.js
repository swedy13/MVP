import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// Components
import App from '../imports/theme/App.jsx';


Meteor.startup(() => {
				render(<App />, document.getElementById('render-target'));
});
