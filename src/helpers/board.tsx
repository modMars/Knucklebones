const gameBoard = function () {
	let board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	const getBoard = () => {
		return board;
	};
	const editBoard = (row: number, column: number, diceValue: number) => {
		board[row][column] = diceValue;
		return;
	};
	const resetBoard = () => {
		board = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		];
		return;
	};

	return { getBoard, editBoard, resetBoard };
};

export default gameBoard;
