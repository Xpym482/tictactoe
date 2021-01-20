function bestMove () {

    let bestScore = Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = 'O';
            let score = minimax(board, 0, false);
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

function minimax(board, depth, isMaximizing) {
    let result = checkWinning();
    if (result) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let j = 0; j < 9; j++) {
            // Is the spot available?
            if (board[j] === '') {
                board[j] = "O";
                let score = minimax(board, depth + 1, false);
                board[j] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let j = 0; j < 9; j++) {
            // Is the spot available?
            if (board[j] === '') {
                board[j] = "X";
                let score = minimax(board, depth + 1, true);
                board[j] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}
