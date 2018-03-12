import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboard-reducer'
import TabReducer from '../common/tab/tab-reducer'
import BillingCycleReducer from '../billing-cycle/billing-cycle-reducer'

const rootReducer = combineReducers({
	dashboard: DashboardReducer,
	tab: TabReducer,
	billingCycle: BillingCycleReducer
})

export default rootReducer