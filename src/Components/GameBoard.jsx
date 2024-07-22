import Card from './Card.jsx'
import Header from './Header.jsx'
import { useState } from 'react'

function GameBoard() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardList, setCardList] = useState([]);

    // function scoreHandler(e) {
    //     console.log(cardList);
    //     let chosenCard = e.target.id;
    //     console.log(chosenCard);
    //     if (cardList.includes(chosenCard)) {
    //         score > highScore ?? setHighScore(score);
    //         setScore(0);
    //         setCardList([]);
    //         alert(cardList);
    //     } else {setCardList
    //         setCardList([...cardList, e.target.id]);
    //         setScore(score + 1);
    //         alert(cardList);
    //     }
    // }

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

const randomize = (list) => {
    for (let i = 0; i < list.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
}

randomize(cards);

    return (
        <>
            <Header score={score} highScore={highScore} />
            <div className="game-board">
                <Card id={cards[0]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[1]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[2]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[3]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[4]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[5]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[6]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[7]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[8]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[9]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[10]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
                <Card id={cards[11]} cardList={cardList} setCardList={setCardList} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
            </div>
        </>
    )
}

export default GameBoard