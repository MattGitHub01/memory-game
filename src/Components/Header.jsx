function Header({ score, highScore }) {
    
    return (
        <header>
            <div className="title">
                <h2>Memory Cards!</h2>
                <span>Click each card, but don&apos;t click the same one twice!</span>
            </div>
            <div className="score">
                <span className="score-reg">Score: </span>
                <span className="score-reg">{score}</span>
                <span className="score-high">High Score: </span>
                <span className="score-high">{highScore}</span>
            </div>
        </header>
    )
}

export default Header