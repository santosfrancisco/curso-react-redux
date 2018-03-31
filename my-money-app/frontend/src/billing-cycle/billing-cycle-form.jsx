import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/label-and-input'

class BillingCycleForm extends Component {
	
	render() {
		const {handleSubmit} = this.props

		return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Field 
						name='name' 
						label='Nome' 
						type='text' 
						cols='12 4'
						placeholder='Informe o nome'
						component={labelAndInput} 
					/>
					<Field 
						name='month' 
						label='Mês' 
						type='number' 
						cols='12 4'
						placeholder='Informe o mês'
						component={labelAndInput} 
					/>
					<Field 
						name='year' 
						label='Ano' 
						type='number' 
						cols='12 4'
						placeholder='Informe o ano'
						component={labelAndInput} 
					/>
				</div>
				<div className='box-footer'>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</div>
			</form>
		);
	}
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)