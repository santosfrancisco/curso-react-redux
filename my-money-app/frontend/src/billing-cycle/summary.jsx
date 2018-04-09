import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/value-box'

export default ({credit, debt}) => (
	<Grid cols='12'>
		<fieldset>
			<legend>Resumo</legend>
		</fieldset>
		<Row>
			<ValueBox 
				cols='12 4'
				icon='bank'
				color='green'
				value={`R$ ${credit}`}	
				text='Total de créditos'
			/>
			<ValueBox
				cols='12 4'
				icon='credit-card'
				color='red'
				value={`R$ ${debt}`}
				text='Total de débitos'
			/>
			<ValueBox
				cols='12 4'
				icon='money'
				color='blue'
				value={`R$ ${credit - debt}`}
				text='Valor consolidado'
			/>
		</Row>
	</Grid>
)