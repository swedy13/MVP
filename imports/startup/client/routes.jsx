import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

<<<<<<< HEAD
// Components
import Theme from '../../client/theme/Theme.jsx';
=======
// route components
import AppContainer from '../../client/AppContainer.jsx'
>>>>>>> 99bee4fff07a6a0b89072c51e8eec92b93f5358e


export const routes = () => (
				<Router history={browserHistory}>
<<<<<<< HEAD
								<Route path="/" component={Theme}/>
=======
								<Route path="/" component={AppContainer}/>
>>>>>>> 99bee4fff07a6a0b89072c51e8eec92b93f5358e
				</Router>
)
