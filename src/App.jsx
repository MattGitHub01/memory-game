import Header from './Components/Header.jsx'
import GameBoard from './Components/GameBoard.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  // Shared state needed to manage game score (GameBoard & Header)
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScore = () => {
    setScore(score);
    if (score >= highScore) {
      setHighScore(score);
    }
  }

  return (
    <>
      <div className='page-wrapper'>
        <Header score={score} highScore={highScore} />
        <GameBoard handleScore={handleScore} />
      </div>
    </>
  )
}

export default App
