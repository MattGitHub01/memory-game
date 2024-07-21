function Header({ score, highScore }) {
    
    return (
        <header>
            <div className="title">
                <h2>Memory Cards!</h2>
                <span>Click each card, but don&apos;t click the same one twice!</span>
            </div>
            <div className="score">
                <div className="score-reg">
                    <span>Score: </span>
                    <span>{score}</span>
                </div>
                <div className="score-high">
                    <span>High Score: </span>
                    <span>{highScore}</span>
                </div>
            </div>
        </header>
    )
}

export default Header