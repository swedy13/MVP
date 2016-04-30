import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Theme from '../../client/theme/Theme.jsx';


export const routes = () => (
				<Router history={browserHistory}>
								<Route path="/" component={Theme}/>
				</Router>
)
