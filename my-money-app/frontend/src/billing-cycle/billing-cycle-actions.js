import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tab-actions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
	const request = axios.get(`${BASE_URL}/billingcycles`)
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	}
}

export function create(values){
	return dispatch => {
		
		axios.post(`${BASE_URL}/billingcycles`, values)
			.then(res => {
				toastr.success('Sucesso', 'Operação realizada com sucesso.')
				dispatch([
					resetForm('billingCycleForm'),
					getList(),
					selectTab('tabList'),
					showTabs('tabList', 'tabCreate')
				])
			})
			.catch( e => {
				e.response.data.errors.forEach(error => {
					toastr.error('Erro', error)
				});
			})

	}
	return {
		type: 'TEMP'
	}
}