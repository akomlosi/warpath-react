const unitReducer = (state = {
	position: [1,1],
	health: 5
}, action) => {
	switch (action.type) {
		case "UNIT_MOVE":
			state = {
				...state,
				position: action.payload
			};
			break;
		case "UNIT_DAMAGE":
			state = {
				...state,
				health: state.health - action.payload
			};
			break;
	}
	return state;
};
export default unitReducer;