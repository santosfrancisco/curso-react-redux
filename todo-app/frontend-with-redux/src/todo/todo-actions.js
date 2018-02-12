import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
	type: 'DESCRIPTION_CHANGED',
	payload: event.target.value
})

export const search = (description) => {

	return ((dispatch, getState) => {
		const description = getState().todo.description
		const search = description ? `&description__regex=/${description}/i` : ''
		const request = axios.get(`${URL}?sort=-createdAt${search}`)
			.then((res) => dispatch({
				type: 'TODO_SEARCHED',
				payload: res.data})
			)
	})
}

export const add = (description) => {
	return (dispatch) => {
		axios.post(URL, { description })
			.then((res) => dispatch(clear()))
			.then((res) => dispatch(search()))
	}
}

export const toggleDone = (todo) => {
	return (dispatch) => {
		axios.put(`${URL}/${todo._id}`, {...todo, done: !todo.done})
			.then((res) => dispatch(search()))
	}
}

export const remove = (todo) => {
	return (dispatch) => {
		axios.delete(`${URL}/${todo._id}`)
			.then((res) => dispatch(search()))
	}
}

export const clear = () => {
	return [{type: 'TODO_CLEAR'}, search()]
}