import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Base from '../../themes/views/Base.jsx';


let IndexRoute = Router.IndexRoute;


export const renderRoutes = () => (
				<Router history={browserHistory}>
								<Route path="/" component={App}>
												<IndexRoute component={Base}/>
								</Route>
				</Router>
);
