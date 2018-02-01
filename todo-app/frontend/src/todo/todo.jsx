import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
	constructor(props){
		super(props)

		this.state = {description: '', list: []}
		this.refresh()
	}

	refresh(description = '') {

		const search = description ? `&description__regex=/${description}/i` : ''
		
		axios.get(`${URL}?sort=-createdAt${search}`)
			.then(
			res => this.setState({
					...this.state,
					description,
					list: res.data
				})
			)
	}

	handleClear(){
		this.refresh()
	}

	handleChange(event){
		this.setState({...this.state, description: event.target.value})
	}

	handleAdd(){

		const description = this.state.description
		axios.post(URL, { description })
			.then(
				res => this.refresh()
			)
	}

	handleRemove(todo){
		axios.delete(`${URL}/${todo._id}`)
			.then(res => this.refresh(this.state.description))
	}

	handleDone(todo){
		axios.put(`${URL}/${todo._id}`,{done: !todo.done})
		.then(res => this.refresh(this.state.description))
	
	}

	handleSearch(){
		this.refresh(this.state.description)
	}

	render() {
		return (
			<div>
				<PageHeader name='Tarefas' small='Cadastro' />
				<TodoForm
					description={this.state.description}
					handleChange={this.handleChange.bind(this)}
					handleAdd={this.handleAdd.bind(this)}
					handleSearch={this.handleSearch.bind(this)}
					handleClear={this.handleClear.bind(this)}
				/>
				<TodoList 
					list={this.state.list} 
					handleRemove={this.handleRemove.bind(this)}	
					handleDone={this.handleDone.bind(this)}
				/>
			</div>	
		)	
	}
}