import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabs-header'
import TabsContent from '../common/tab/tabs-content'
import TabHeader from '../common/tab/tab-header'
import TabContent from '../common/tab/tab-content'
import List from './billing-cycle-list'

import { selectTab, showTabs } from '../common/tab/tab-actions'

class BillingCycle extends Component {

	componentWillMount(){
		this.props.selectTab('tabList')
		this.props.showTabs('tabList', 'tabCreate')
	}
	
	render() {
		return (
			<div>
				<ContentHeader 
					title='Ciclos de pagamento'
					subtitle='Cadastro'
				/>
				<Content>
				<Tabs>
					<TabsHeader>
						<TabHeader icon='bars' label='Listar' target='tabList' />
						<TabHeader icon='plus' label='Adicionar' target='tabCreate' />
						<TabHeader icon='pencil' label='Editar' target='tabUpdate' />
						<TabHeader icon='trash-o' label='Excluir' target='tabDelete' />
					</TabsHeader>
					<TabsContent>
						<TabContent id='tabList'>
							<List />
						</TabContent>
						<TabContent id='tabCreate'>
							<h1>Adicionar</h1>
						</TabContent>
						<TabContent id='tabUpdate'>
							<h1>Editar</h1>
						</TabContent>
						<TabContent id='tabDelete'>
							<h1>Excluir</h1>
						</TabContent>
					</TabsContent>
				</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	selectTab,
	showTabs
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)

