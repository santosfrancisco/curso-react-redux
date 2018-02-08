const INITIAL_STATE = {
	description: 'Jogar videogame',
	list: [
		{
			_id: 1,
			description: 'Jogar Super Mario',
			done: false
		}, {
			_id: 2,
			description: 'Jogar Sonic',
			done: true
		}, {
			_id: 3,
			description: 'Jogar Donkey Kong',
			done: false
		}
	]
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'DESCRIPTION_CHANGED':
			return ({
				...state, description: action.payload
			})
	
		default:
			return state
	}
}