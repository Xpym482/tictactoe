let playerTurn = true; // false - null, true - cross
let gameFinished = false; // set true if game finished
let whoWon = "";
let boxes;
let board;
const restartGameDiv = document.getElementById("restart-game");


// 1 - null, 2 - cross

let startBoard = [
	"X", "X", "O",
	"", "O", "",
	"", "", "",
];


/*
 * IMPLEMENT TEXT ON SCREEN WHO WON
 * IMPLEMENT DESIGN
 */
function gameStatus() {
	boxes = document.getElementsByClassName("box");

	restartGameDiv.style = "display: none";
	board = [...startBoard];
	whoWon = "";
	if(boxes) {
		for (let item of boxes){
			item.innerHTML = "";
		}
	}
}

function boardFill(squareNum) {
	boxes = document.getElementsByClassName("box");

	if (gameFinished) return;

	//check who has turn and if array has no data on this index
	if(playerTurn && board[squareNum] === "") {
		board[squareNum] = "X";
		boxes[squareNum].innerHTML = "<span class='text x-mark'>X</span>";
		playerTurn = false;
		bestMove();
		if(checkWinning()) {
			gameFinished = true;
			console.log("Winner is " + whoWon);
		}
	}
}

function checkWinning() {
	/*
	 * FROM LEFT TO RIGHT
	 */
	if((board[0] === "X" || board[0] ===  "O") && board[0] === board[1] && board[1] === board[2]) {
		whoWon = board[0];
		return whoWon;
	}
	if((board[3] === "X" || board[3] === "O") && board[3] === board[4] && board[4] === board[5]){
		whoWon = board[3];
		return whoWon;
	}
	if((board[6] === "X" || board[6] === "O") && board[6] === board[7] && board[7] === board[8]){
		whoWon = board[6];
		return whoWon;
	}

	/*
	 * FROM UP TO DOWN
	 */
	if((board[0] === "X" || board[0] === "O") && board[0] === board[3] && board[3] === board[6]){
		whoWon = board[0];
		return whoWon;
	}
	if((board[1] === "X" || board[1] === "O") && board[1] === board[4] && board[4] === board[7]){
		whoWon = board[1];
		return whoWon;
	}
	if((board[2] === "X" || board[2] === "O") && board[2] === board[5] && board[5] === board[8]){
		whoWon = board[2];
		return whoWon;
	}

	/*
	 * DIAGONAL LEFT UPPER TO RIGHT BOTTOM
	 */
	if((board[0] === "X" || board[0] === "O") && board[0] === board[4] && board[4] === board[8]){
		whoWon = board[0];
		return whoWon;
	}

	/*
	 * DIAGONAL RIGHT UPPER TO LEFT BOTTOM
	 */
	if((board[2] === "X" || board[2] === "O") && board[2] === board[4] && board[4] === board[6]){
		whoWon = board[2];
		return whoWon;
	}

	if(!board.includes("")) {
		whoWon = "Draw";
		return "tie";
	}
	return false;
}

