import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/icon-button'
import { changeDescription, search, add, clear } from './todo-actions'

class TodoForm extends Component {
	constructor (props){
		super(props)

		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount(){
		this.props.search()
	}

	keyHandler(event){
		const {add, search, description, clear } = this.props
		if (event.key === 'Enter') {
			event.shiftKey ? search() : add(description)
		} else {
			if (event.key === 'Escape') {
				clear()
			}
		}
	}

render(){
	const {add, search, description, clear} = this.props

	return (
		<div role='form' className='todo-form'>
			<Grid cols='12 9 10'>
				<input
					id='description'
					className='form-control'
					placeholder='Adicione uma tarefa'
					onKeyUp={this.keyHandler}
					onChange={this.props.changeDescription}
					value={this.props.description}
				>
				</input>
			</Grid>
			<Grid cols='12 3 2' >
				<IconButton
					style='primary'
					icon='plus'
					onClick={() => add(description)}
				/>
				<IconButton
					style='info'
					icon='search'
					onClick={search}
				/>
				<IconButton
					style='default'
					icon='close'
					onClick={clear}
				/>
			</Grid>
		</div>
			)
		}
}

const mapStateToProps = state => ({
	description: state.todo.description
})

const mapStateToDispatch = dispatch => 
	bindActionCreators({
	changeDescription,
	search,
	add,
	clear
}, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(TodoForm)