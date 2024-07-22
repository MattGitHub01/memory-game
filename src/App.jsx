// import Header from './Components/Header.jsx'
import GameBoard from './Components/GameBoard.jsx'
// import { useState } from 'react'
import './App.css'

function App() {
  // const [score, setScore] = useState(0)
  // const [highScore, setHighScore] = useState(0)
  
  // const scoreTransfer = (score, highScore) => {
  //   return {score, highScore}
  // }

  // const sendScore {
  //   setScore(scoreTransfer.score);
  //   setHighScore(scoreTransfer.highScore);
  // }

  // sendScore()



  return (
    <>
      <div className='page-wrapper'>
        <GameBoard />
      </div>
    </>
  )
}

export default App
