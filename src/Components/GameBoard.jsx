import Card from './Card.jsx'
import { useState } from 'react'

function GameBoard({ handleScore }) {
    // Update handleScore and return to App --> Header (maybe from Card)

    return (
        <div className="game-board">
            <Card id={14}/>
            <Card id={121}/>
            <Card id={39}/>
            <Card id={422}/>
            <Card id={575}/>
            <Card id={12}/>
            <Card id={5}/>
            <Card id={808}/>
            <Card id={91}/>
            <Card id={144}/>
            <Card id={2}/>
            <Card id={17}/>
        </div>
    )
}

export default GameBoard