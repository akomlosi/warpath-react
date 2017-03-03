export function move(position) {
	return {
		type: "UNIT_MOVE",
		payload: position
	};
}

export function damage(amount) {
	return {
		type: "UNIT_DAMAGE",
		payload: amount
	};
}