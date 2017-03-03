import React from 'react';
import { Unit } from './components/Unit';
import { connect } from "react-redux";
import { move, damage } from './actions/unitActions';

class Combat extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Combat!</h1>
				<Unit move={()=>this.props.move([10,10])} damage={()=>{ this.props.damage(1) }}
				      health={this.props.unit.health}
				      position={this.props.unit.position}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		unit: state.unit
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		move: (position) => {
			dispatch(move(position))
		},
		damage: (amount) => {
			dispatch(damage(amount))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Combat);
