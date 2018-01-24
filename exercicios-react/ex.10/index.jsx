import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family lastName="Santos">
		<Member name="Luiz Augusto" />
		<Member name="Karina" />
		<Member name="Francisco" />
	</Family>,
	document.getElementById('app')
)