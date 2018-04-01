import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billing-cycle-actions'
import labelAndInput from '../common/form/label-and-input'

class BillingCycleForm extends Component {
	
	render() {
		const {handleSubmit, readOnly} = this.props

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
						readOnly={readOnly}
					/>
					<Field 
						name='month' 
						label='Mês' 
						type='number' 
						cols='12 4'
						placeholder='Informe o mês'
						component={labelAndInput} 
						readOnly={readOnly}
					/>
					<Field 
						name='year' 
						label='Ano' 
						type='number' 
						cols='12 4'
						placeholder='Informe o ano'
						component={labelAndInput} 
						readOnly={readOnly}
					/>
				</div>
				<div className='box-footer'>
					<button type='submit' className='btn btn-primary'>Submit</button>
					<button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
				</div>
			</form>
		);
	}
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)