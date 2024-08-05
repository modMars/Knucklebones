import gameBoard from './board';

class Player {
	name: string;
	private playerBoard: ReturnType<typeof gameBoard>;
	constructor(name: string) {
		this.name = name;
		this.playerBoard = gameBoard();
	}
	throwDice() {
		return Math.floor(Math.random() * 6) + 1;
	}
	getPlayerBoard() {
		return this.playerBoard.getBoard();
	}
	editPlayerBoard(row: number, column: number, diceValue: number) {
		this.playerBoard.editBoard(row, column, diceValue);
	}
	resetBoard() {
		this.playerBoard.resetBoard();
	}
}

export default Player;
