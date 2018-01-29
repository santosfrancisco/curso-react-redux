import React, { Component } from 'react'

import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

export default class Todo extends Component {
	handleAdd(){
		console.log('Add todo...', this)
	}
	
	render() {
		return (
			<div>
				<PageHeader name='Tarefas' small='Cadastro' />
				<TodoForm handleAdd={this.handleAdd.bind(this)}/>
				<TodoList />
			</div>	
		)	
	}
}