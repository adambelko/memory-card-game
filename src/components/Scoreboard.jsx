const Scoreboard = ({ currScore, bestScore }) => {
    return (
        <div className="scoreboard">
            <div className="current-score">Current Score: {currScore}</div>
            <div className="best-score">Best Score: {bestScore}</div>
        </div>
    );
};

export default Scoreboard;
