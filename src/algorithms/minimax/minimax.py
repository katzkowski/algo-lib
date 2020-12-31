import enum

# Game constants
BOARD_SIZE = 3
WIN = 100
DRAW = 0
INT_MIN = -1000
INT_MAX = 1000

# Signs that can be drawn into game board. 
EMPTY = " - "
CROSS = " x "
CIRCLE = " o "

# Store current player to move
player_to_move = CROSS

# Tic Tac Toe Board
board = [EMPTY for i in range(BOARD_SIZE * BOARD_SIZE)]

"""
Prints a tic tac toe board to console.
"""
def print_board():
    for i in range(9):
        if i%BOARD_SIZE == 0:
            print()
        print(board[i], end="")

    print()
        

"""
Return a vector with all squares on the board, that are empty. These
are the possible moves to be played.
"""
def generate_moves():
    moves = []
    for i in range(BOARD_SIZE * BOARD_SIZE):
        if board[i] == EMPTY:
            moves.append(i)

    return moves


"""
Evaluate board. Returns WIN according to winning side, if a line is found.
If board is either a draw or not deicded yet DRAW is returned.
"""
def evaluation():
    # Search for horizontal winning lines
    j = 0
    for _ in range(BOARD_SIZE):
        if board[j] != EMPTY and board[j] == board[j + 1] and board[j + 1] == board[j + 2]:
            return WIN if (board[j] == CIRCLE) else -WIN
        j += BOARD_SIZE

    # Search for horizontal winning lines
    for i in range(BOARD_SIZE):
        if board[i] != EMPTY and board[i] == board[i + BOARD_SIZE] and board[i + BOARD_SIZE] == board[i + (2 * BOARD_SIZE)]:
            return WIN if (board[i] == CIRCLE) else -WIN

    # Search for diagonal winning lines
    if board[0] != EMPTY and board[0] == board[4] and board[4] == board[8]:
        return WIN if (board[0] == CIRCLE) else -WIN
    if board[2] != EMPTY and board[2] == board[4] and board[4] == board[6]:
        return WIN if (board[2] == CIRCLE) else -WIN

    # No winning line scores a DRAW
    return DRAW


"""
Push a move onto the board.
"""
def play_move(index):
    global player_to_move
    board[index] = player_to_move
    player_to_move = CIRCLE if player_to_move == CROSS else CROSS

"""
Take a move back from the board.
"""
def takeback_move(index):
    global player_to_move
    player_to_move = CIRCLE if player_to_move == CROSS else CROSS
    board[index] = EMPTY


def max_node(depth):
    # Eval for eaf nodes and decided games are returned
    if depth == 0:
        return evaluation()

    # Maximize score for all possible moves
    best_score = -1000
    for move in generate_moves():
        play_move(move)
        score = min_node(depth - 1)
        takeback_move(move)
        best_score = max(best_score, score)

    return best_score


def min_node(depth):
    # Eval for leaf nodes and decided games are returned
    if depth == 0: 
        return evaluation()

    # Minimize score for all possible moves
    best_score = 1000
    for move in generate_moves():
        play_move(move)
        score = max_node(depth - 1)
        takeback_move(move)
        best_score = min(best_score, score)

    return best_score

"""
Function executes minimax algorithm.
- CIRCLE wins with positive score -> use max_node if CIRCLE is to move next
- CROSS wins with negative score -> use min_node if CROSS is to move next
"""
def main():
    print("Start minimax algorithm")

    # Depth must equal the remaining squares on the board
    depth = 9

    # Set initial player
    global player_to_move
    player_to_move = CIRCLE

    print_board()

    # Run minimax
    best_outcome = 0
    if player_to_move == CROSS: best_outcome = min_node(depth)
    if player_to_move == CIRCLE: best_outcome = max_node(depth)

    print("Player to move is", player_to_move)
    print("Best outcome for moving player is ", best_outcome)

if __name__ == "__main__":
    main()

