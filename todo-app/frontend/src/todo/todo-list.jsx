import React from 'react'
import IconButton from '../template/icon-button'

export default props => {
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
							onClick={() => props.handleDone(todo)}	
						/>
						<IconButton 
							style='danger' 
							icon='trash' 
							onClick={() => props.handleRemove(todo)}						
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