import React from 'react'

export default props => (
	<div>
	<h2>Família {props.lastName}</h2>
		{ React.cloneElement(props.children, {...props})}
	</div>
)