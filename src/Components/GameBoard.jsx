import Card from './Card.jsx'
import { useState } from 'react'

function GameBoard({ scoreHandler }) {
    const [order, setOrder] = useState(12)
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);


  function scoreHandler(e) {
    let chosenCard = e.target.src;
    if (clickedCards.includes(chosenCard)) {
        alert(`You Lose: Your Score Was ${score}`);
        score > highScore ?? setHighScore(score);
        setScore(0);
        setClickedCards([])
    } else {
      setClickedCards([...clickedCards, e.target.src]);
      setScore(score + 1);
    }
  }


    return (
        <div className="game-board">
            <Card card={card} id={14}/>
            <Card card={card} id={121}/>
            <Card card={card} id={39}/>
            <Card card={card} id={422}/>
            <Card card={card} id={575}/>
            <Card card={card} id={12}/>
            <Card card={card} id={5}/>
            <Card card={card} id={808}/>
            <Card card={card} id={91}/>
            <Card card={card} id={144}/>
            <Card card={card} id={2}/>
            <Card card={card} id={17}/>
        </div>
    )
}

export default GameBoard