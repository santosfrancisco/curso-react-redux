import React from 'react'
import IconButton from '../template/icon-button'

export default props => {
	const renderRows = () => {
		
		const list = props.list || []

		const doneStyle = {
			textDecoration: 'line-through'
		}

		const dueStyle = {
			textDecoration: 'none'
		}
		
		return list.map(todo => (
				<tr key={todo._id} >
					<td 
						style={todo.done?doneStyle:dueStyle}
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
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
}