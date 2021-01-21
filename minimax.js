function bestMove () {

    let bestScore = Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = 'O';
            let score = minimax(board, "X");
            board[i] = '';
            if (score < bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    board[move] = "O";
    boxes[move].innerHTML = "<span class='text o-mark'>O</span>"
    console.log(move);
    playerTurn = true;
}

let scores = {
    X: 1,
    O: -1,
    tie: 0
};

function minimax(board, turn) {
    let result = checkWinning();
    if (result) {
        return scores[result];
    }

    if (turn === "X") {
        let bestScore = -Infinity;
        for (let j = 0; j < 9; j++) {
            if (board[j] === '') {
                board[j] = "X";
                let score = minimax(board, "O");
                board[j] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let j = 0; j < 9; j++) {
            if (board[j] === '') {
                board[j] = "O";
                let score = minimax(board, "X");
                board[j] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}
