import { useEffect, useState } from "react";

function Card ({ id, cardList, setCardList, score, setScore, highScore, setHighScore }) {
    const [data, setData] = useState();
    const [cardId, setCardId] = useState({id});

    let winCount = score + 1;

    useEffect(() => {
        const fetchFromAPI = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const json = await response.json();
            if (response.ok) {
                setCardId({id});
                setData(json);
            } else {
                throw new Error('ERROR: .JSON file was not received from the API');
            }
        }   
        fetchFromAPI()
    });

    function scoreHandler() {
        console.log(winCount);
        console.table(cardList);
        if (cardList.some((c) => c.id === cardId.id)) {
            alert('Try Again!')
            if (score >= highScore) {
                setHighScore(score);
            }
            setScore(0);
            setCardList([]);
        } else {
            setScore(score + 1);
            if (score >= highScore) {
                setHighScore(score + 1);
            }
            setCardList([...cardList, cardId]);
        }
        if (winCount === 12) {
            alert('You Win!');
            if (score >= highScore) {
                setHighScore(score + 1);
            }
            setScore(0);
            setCardList([]);
        }
    }
        

    return (
        <div className="card" onClick={scoreHandler}>
            {data ? (
                <>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <p>{data.name}</p>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}

export default Card