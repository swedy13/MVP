import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Theme from '../../client/theme/Theme.jsx';
import Subscriptions from '../../apps/subscriptions/client/Subscriptions.jsx';


export const routes = () => (
				<Router history={browserHistory}>
								<Route path="/" component={Theme}>
												<Route path="subscriptions" component={Subscriptions}/>
								</Route>
				</Router>
)
