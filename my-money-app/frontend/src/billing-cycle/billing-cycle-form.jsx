import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billing-cycle-actions'
import LabelAndInput from '../common/form/label-and-input'
import CreditList from './credit-list'

class BillingCycleForm extends Component {
	
	render() {
		const {handleSubmit, readOnly, credits} = this.props

		return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Field 
						name='name' 
						label='Nome' 
						type='text' 
						cols='12 4'
						placeholder='Informe o nome'
						component={LabelAndInput}
						readOnly={readOnly}
					/>
					<Field 
						name='month' 
						label='Mês' 
						type='number' 
						cols='12 4'
						placeholder='Informe o mês'
						component={LabelAndInput} 
						readOnly={readOnly}
					/>
					<Field 
						name='year' 
						label='Ano' 
						type='number' 
						cols='12 4'
						placeholder='Informe o ano'
						component={LabelAndInput} 
						readOnly={readOnly}
					/>
					<CreditList 
						cols='12 6' 
						readOnly={readOnly}
						list={credits} />
				</div>
				<div className='box-footer'>
					<button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
					<button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
				</div>
			</form>
		);
	}
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = (state) => ({credits: selector(state, 'credits')})

const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)