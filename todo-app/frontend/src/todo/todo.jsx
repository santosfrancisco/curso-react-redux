import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
	constructor(props){
		super(props)

		// seta o state que será manipulado, pois props é readonly
		this.state = {description: '', list: []}
		this.refresh()
	}

	// atualiza o state.description
	handleChange(event){
		this.setState({...this.state, description: event.target.value})
	}

	// adiciona uma todo
	handleAdd(){

		const description = this.state.description
		axios.post(URL, { description })
			.then(
				res => this.refresh()
			)
	}

	handleRemove(todo){
		axios.delete(`${URL}/${todo._id}`)
			.then(res => this.refresh())
	}

	handleDone(todo){
		axios.put(`${URL}/${todo._id}`,{done: !todo.done})
		.then(res => this.refresh())
	
	}

	refresh(){
		axios.get(`${URL}?sort=-createdAt`)
			.then(
				res => this.setState({
					...this.state, 
					description: '',
					list: res.data
				})
			)
	}

	render() {
		return (
			<div>
				<PageHeader name='Tarefas' small='Cadastro' />
				<TodoForm
					description={this.state.description}
					handleChange={this.handleChange.bind(this)}
					handleAdd={this.handleAdd.bind(this)}/>
				<TodoList 
					list={this.state.list} 
					handleRemove={this.handleRemove.bind(this)}	
					handleDone={this.handleDone.bind(this)}
				/>
			</div>	
		)	
	}
}