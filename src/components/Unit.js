import React from 'react';
import unitActions from '../actions/unitActions';
export const Unit = (props) => {

	return (
		<div>
			<p>Unit</p>
			<span>Health: {props.health}</span>
			<span>Position: {props.position}</span>
			<button onClick={props.move}>MOVE</button>
			<button onClick={props.damage}>DAMAGE</button>
		</div>
	)
}