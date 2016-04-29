import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

// Routes
import { routes } from '../imports/startup/client/routes.jsx'


Meteor.startup(() => {
				render(routes(), document.getElementById('app'))
})
