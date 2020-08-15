let playerTurn = true; // false - null, true - cross
let gameFinished = true; // set true if game finished
let whoWon = "";
let boxes;
let board;

// 1 - null, 2 - cross

let startBoard = [
	NaN, NaN, NaN,
	NaN, NaN, NaN,
	NaN, NaN, NaN
];


/*
 * IMPLEMENT TEXT ON SCREEN WHO WON
 * IMPLEMENT DESIGN
 */
function gameStatus() {
	gameFinished = false;
	board = [...startBoard];
	if(boxes) {
		for (let item of boxes){
			item.innerHTML = "";
		}
	}
}

function boardFill(squareNum) {
	boxes = document.getElementsByClassName("box");
	if(whoWon === "X"){
		alert("Winner is" + whoWon);
	}

	// return if game finished
	if (gameFinished) return;

	//check who has turn and if array has no data on this index
	if(playerTurn && typeof board[squareNum] !== "string") {
		board.splice(squareNum, 1, "X");
		/*boxes[squareNum].innerHTML = "X";*/
		boxes[squareNum].innerHTML = "<span class='text x-mark'>X</span>";
		playerTurn = false;
		checkWinning();
		return;
	}
	if(!playerTurn && typeof board[squareNum] !== "string") {
		board.splice(squareNum, 1, "O");
		boxes[squareNum].innerHTML = "<span class='text o-mark'>O</span>"
		playerTurn = true;
		checkWinning();
	}
}

function checkWinning() {
	/*
	 * FROM LEFT TO RIGHT
	 */
	if(board[0] === board[1] && board[1] === board[2]) {
		gameFinished = true;
		whoWon = board[0];
		return;
	}
	if(board[3] === board[4] && board[4] === board[5]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}
	if(board[6] === board[7] && board[7] === board[8]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}

	/*
	 * FROM UP TO DOWN
	 */
	if(board[0] === board[3] && board[3] === board[6]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}
	if(board[1] === board[4] && board[4] === board[7]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}
	if(board[2] === board[5] && board[5] === board[8]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}

	/*
	 * DIAGONAL LEFT UPPER TO RIGHT BOTTOM
	 */
	if(board[0] === board[4] && board[4] === board[8]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}

	/*
	 * DIAGONAL RIGHT UPPER TO LEFT BOTTOM
	 */
	if(board[2] === board[4] && board[4] === board[6]){
		gameFinished = true;
		whoWon = board[3];
		return;
	}

	if(!board.includes(NaN)) {
		gameFinished = true;
		whoWon = "Draw";
	}
}

