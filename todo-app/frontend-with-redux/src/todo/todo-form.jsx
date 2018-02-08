import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/icon-button'
import { changeDescription } from './todo-actions'

const TodoForm = props => {

	const keyHandler = function(event){
		if (event.key === 'Enter') {
				event.shiftKey ? props.handleSearch() : props.handleAdd()
		} else {
			if (event.key === 'Escape') {
				props.handleClear()
			} 
		}
	}

	return (
		<div role='form' className='todo-form'>
			<Grid cols='12 9 10'>
				<input
					id='description'
					className='form-control'
					placeholder='Adicione uma tarefa'
					onKeyUp={keyHandler}
					onChange={props.changeDescription}
					value={props.description}
				>
				</input>
			</Grid>
			<Grid cols='12 3 2' >
				<IconButton
					style='primary'
					icon='plus'
					onClick={props.handleAdd}
				/>
				<IconButton
					style='info'
					icon='search'
					onClick={props.handleSearch}
				/>
				<IconButton
					style='default'
					icon='close'
					onClick={props.handleClear}
				/>
			</Grid>
		</div>
	)
}

const mapStateToProps = state => ({
	description: state.todo.description
})

const mapStateToDispatch = dispatch => 
	bindActionCreators({
	changeDescription
}, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(TodoForm)