
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {inc, dec, stepChanged } from './counter-actions'

const Counter = (props) => (
	<div>
		<h1>{props.extra.title} {props.counter.number}</h1>
		<input 
			type="number"
			onChange={props.stepChanged}
			value={props.counter.step}
		/>
		<button onClick={props.dec}>-</button>
		<button onClick={props.inc}>+</button>
	</div>
) 

const mapStateToProps = state => ({
	counter: state.counter,
	extra: state.extra
})

const mapDispatchToProps = dispatch => 
	bindActionCreators ({
		inc,
		dec,
		stepChanged
	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
