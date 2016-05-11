import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

// Components
import Theme from '../../theme/components/Theme.jsx';
import Subscriptions from '../../apps/subscriptions/client/Subscriptions.jsx';


export const routes = () => (
				<Router history={browserHistory}>
								<Route path="/" component={Theme}>
												<IndexRoute component={Subscriptions}/>
												<Route path="subscriptions" component={Subscriptions}/>
								</Route>
				</Router>
)
