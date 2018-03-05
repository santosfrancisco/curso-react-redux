import React, { Component } from 'react';
import axios from 'axios' 

import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import ValueBox from '../common/widget/value-box'
import Row from '../common/layout/row'

const URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {
	constructor(props){
		super(props)

		this.state = {credit: 0, debt: 0}
	}

	componentWillMount() {
		axios.get(`${URL}/billingcycles/summary`)
			.then(res => this.setState(res.data))
	}
	render() {
		const {credit, debt} = this.state

		return (
			<div>
				<ContentHeader 
					title='Dashboard' 
					subtitle='versão 1.1' 
				/>
				<Content>
					<Row>
						<ValueBox
							cols='12 4'	
							value={`R$ ${credit}`}
							text='Créditos'
							color='green'
							icon='bank' 
						/>
						<ValueBox
							cols='12 4'
							value={`R$ ${debt}`}
							text='Débitos'
							color='red'
							icon='credit-card'
						/>
						<ValueBox
							cols='12 4'
							value={`R$ ${credit - debt}`}
							text='Saldo'
							color='blue'
							icon='money'
						/>
					</Row>
				</Content>
			</div>			
		);
	}
}
