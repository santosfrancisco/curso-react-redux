import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboard-reducer'
import TabReducer from '../common/tab/tab-reducer'

const rootReducer = combineReducers({
	dashboard: DashboardReducer,
	tab: TabReducer
})

export default rootReducer