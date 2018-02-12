import React from 'react'

import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

export default (props) => (
	<div>
		<PageHeader name='Tarefas' small='Cadastro' />
		<TodoForm />
		<TodoList />
	</div>	
)	