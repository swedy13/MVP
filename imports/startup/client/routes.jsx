import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../client/AppContainer.jsx';


export const routes = () => (
				<Router history={browserHistory}>
								<Route path="/" component={AppContainer}/>
				</Router>
);
