import React from 'react';

function Score({ score }) {
    console.log(score);
    return (
        <div className="score">
            <p>Date: {score.date}</p>
            <p>Score: {score.score}</p>
        </div>
    );
}

export default Score;