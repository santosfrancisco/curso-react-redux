import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard2/dashboard'
import BillingCycle from '../billing-cycle/billing-cycle'

export default props => (
	<Router history={hashHistory}>
		<Route path='/' component={Dashboard} />
		<Route path='/billingcycle' component={BillingCycle} />
		<Redirect from='*' to='/' /> 
	</Router>
)