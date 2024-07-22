import Card from './Card.jsx'
import Header from './Header.jsx'
import { useState } from 'react'

function GameBoard() {
    const [order, setOrder] = useState(12)
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);


function scoreHandler(e) {
    let chosenCard = e.target.id;
    if (clickedCards.includes(chosenCard)) {
        alert(`You Lose: Your Score Was ${score}`);
        score > highScore ?? setHighScore(score);
        setScore(0);
        setClickedCards([])
    } else {
        setClickedCards([...clickedCards, e.target.id]);
        setScore(score + 1);
    }
}

let cards = [
    14,
    121,
    39,
    422,
    575,
    12,
    5,
    808,
    91,
    144,
    2,
    17
]

    return (
        <>
            <Header score={score} highScore={highScore} />
            <div className="game-board">
                <Card cards={cards} id={14} scoreHandler={scoreHandler} />
                <Card cards={cards} id={121} scoreHandler={scoreHandler} />
                <Card cards={cards} id={39} scoreHandler={scoreHandler} />
                <Card cards={cards} id={422} scoreHandler={scoreHandler} />
                <Card cards={cards} id={575} scoreHandler={scoreHandler} />
                <Card cards={cards} id={12} scoreHandler={scoreHandler} />
                <Card cards={cards} id={5} scoreHandler={scoreHandler} />
                <Card cards={cards} id={808} scoreHandler={scoreHandler} />
                <Card cards={cards} id={91} scoreHandler={scoreHandler} />
                <Card cards={cards} id={144} scoreHandler={scoreHandler} />
                <Card cards={cards} id={2} scoreHandler={scoreHandler} />
                <Card cards={cards} id={17}/>
            </div>
        </>
    )
}

export default GameBoard