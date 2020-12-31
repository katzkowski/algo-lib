#include <iostream>
#include <vector>
#include <limits.h> // INT_MIN, INT_MAX

using namespace std;

// Game constants
const int BOARD_SIZE = 3;
const int WIN = 100;
const int DRAW = 0;

// Signs that can be drawn into game board
enum SIGN {
    EMPTY,
    CROSS,
    CIRCLE
};

// Store current player to move
int playerToMove;

// Declare minimax functions
int minNode(int depth);
int maxNode(int depth);

// Tic Tac Toe Board
vector<int> board(BOARD_SIZE* BOARD_SIZE, EMPTY);

/**
 * Prints a tic tac toe board to console.
 */
void printBoard() {
    for (int i = 0; i < board.size(); i++) {

        if (i % BOARD_SIZE == 0) {
            cout << endl;
        }

        switch (board[i]) {
        case EMPTY: cout << " - "; break;
        case CROSS: cout << " x "; break;
        case CIRCLE: cout << " o "; break;
        default: break;
        }
    }
    cout << endl;
}

/**
 * Return a vector with all squares on the board, that are empty. These
 * are the possible moves to be played.
 */
vector<int> generateMoves() {
    vector<int> moves;
    for (int i = 0; i < board.size(); i++) {
        // add empty squares
        if (board[i] == EMPTY) {
            moves.push_back(i);
        }
    }
    return moves;
}

/**
 * Evaluate board. Returns WIN according to winning side, if a line is found.
 * If board is either a draw or not deicded yet DRAW is returned.
 */
int evaluation() {
    // Search for horizontal winning lines
    for (int i = 0; i < BOARD_SIZE * BOARD_SIZE; i += BOARD_SIZE) {
        if (board[i] != EMPTY && board[i] == board[i + 1] && board[i + 1] == board[i + 2]) {
            return (board[i] == CIRCLE) ? WIN : -WIN;
        }
    }

    // Search for horizontal winning lines
    for (int i = 0; i < BOARD_SIZE; i++) {
        if (board[i] != EMPTY && board[i] == board[i + BOARD_SIZE] && board[i + BOARD_SIZE] == board[i + (2 * BOARD_SIZE)]) {
            return (board[i] == CIRCLE) ? WIN : -WIN;
        }
    }

    // Search for diagonal winning lines
    if (board[0] != EMPTY && board[0] == board[4] && board[4] == board[8]) {
        return (board[0] == CIRCLE) ? WIN : -WIN;
    }
    else if (board[2] != EMPTY && board[2] == board[4] && board[4] == board[6]) {
        return (board[2] == CIRCLE) ? WIN : -WIN;
    }

    // No winning line scores a DRAW
    return DRAW;
}

/**
 * Push a move onto the board.
 */
void playMove(int index) {
    board[index] = playerToMove;
    playerToMove = (playerToMove == CROSS) ? CIRCLE : CROSS;
}

/**
 * Take a move back from the board.
 */
void takebackMove(int index) {
    playerToMove = (playerToMove == CROSS) ? CIRCLE : CROSS;
    board[index] = EMPTY;
}

int maxNode(int depth) {
    // Leaf nodes are evaluated
    if (depth == 0)
        return evaluation();

    // Maximize score for all possible moves
    int score = 0, bestScore = INT_MIN;
    for (int m : generateMoves()) {
        playMove(m);
        score = minNode(depth - 1);
        takebackMove(m);
        bestScore = max(bestScore, score);
    }
    return bestScore;
}

int minNode(int depth) {
    // Leaf nodes are evaluated
    if (depth == 0)
        return evaluation();

    // Minimize score for all possible moves
    int score = 0, bestScore = INT_MAX;
    for (int m : generateMoves()) {
        playMove(m);
        score = maxNode(depth - 1);
        takebackMove(m);
        bestScore = min(bestScore, score);
    }
    return bestScore;
}

/**
 * Function executes minimax algorithm.
 * - CIRCLE wins with positive score -> use max_node if CIRCLE is to move next
 * - CROSS wins with negative score -> use min_node if CROSS is to move next
 */
int main(int argc, char const* argv[]) {
    int depth = 9; // depth has to be remaining empty squares

    playerToMove = CROSS;

    int bestOutcome;
    if (playerToMove == CROSS) {
        bestOutcome = minNode(depth);
    }
    else {
        bestOutcome = maxNode(depth);
    }

    printBoard();
    cout << "Player to move " << playerToMove << "(x=1, o=2)" << endl;
    cout << "Board evals to " << evaluation() << endl;
    cout << "Best outcome for moving player is " << bestOutcome << endl;
    return 0;
}
