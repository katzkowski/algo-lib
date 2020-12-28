int maxNode(int depth) {
    if (depth == 0)
        return evaluation();
    
    int score, bestScore = INT_MIN;
    for (Move m : moveList) {
        playMove(m);
        score = minNode(depth - 1);
        takebackMove(m);
        max(bestScore, score);
    }
}

int minNode(int depth) {
    if (depth == 0)
        return -evaluation();
    
    int score, bestScore = INT_MAX;
    for (Move m : moveList) {
        playMove(m);
        score = maxNode(depth - 1);
        takebackMove(m);
        min(bestScore, score);
    }
}