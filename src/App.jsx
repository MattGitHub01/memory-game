import Header from './Components/Header.jsx'
import GameBoard from './Components/GameBoard.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  // Shared state needed to manage game score (GameBoard & Header)
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
    <>
      <div className='page-wrapper'>
        <Header score={score} highScore={highScore} />
        <GameBoard scoreHandler={scoreHandler} />
      </div>
    </>
  )
}

export default App
