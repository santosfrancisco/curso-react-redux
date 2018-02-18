import React, { Component } from 'react';
import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import ValueBox from '../common/widget/value-box'


class Dashboard extends Component {
	render() {
		return (
			<div>
				<ContentHeader 
					title='Dashboard' 
					subtitle='versão 1.0' 
				/>
				<Content>
				<ValueBox
					cols='12 4'	
					value='R$ 100'
					text='Créditos'
					color='green'
					icon='bank' 
				/>
				<ValueBox
					cols='12 4'
					value='R$ 100'
					text='Débitos'
					color='red'
					icon='credit-card'
				/>
				<ValueBox
					cols='12 4'
					value='R$ 0'
					text='Consolidado'
					color='blue'
					icon='money'
				/>
				</Content>
			</div>			
		);
	}
}

export default Dashboard