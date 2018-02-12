import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/icon-button'
import {toggleDone, remove} from './todo-actions'

const TodoList =  props => {
	const renderRows = () => {
		
		const list = props.list || []
		
		return list.map(todo => (
				<tr key={todo._id} >
					<td 
						className={todo.done ? 'marked-as-done': ''}
					>
						{todo.description}
					</td>
					<td>
						<IconButton 
							style={todo.done ? 'primary' : 'success'} 
							icon={todo.done ? 'undo' : 'check'}
						onClick={() => props.toggleDone(todo)}	
						/>
						<IconButton 
							style='danger' 
							icon='trash' 
						onClick={() => props.remove(todo)}						
						/>
					</td>
				</tr>
			)
		)
		
	}	
	
	return(
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
					<th className='table-actions'>Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
}

const mapStateToProps = function(state){
	return ({
		list: state.todo.list
	})
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	toggleDone,
	remove
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)