import { useEffect, useState } from "react";

function Card ({ id, cardList, setCardList, score, setScore, highScore, setHighScore }) {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchFromAPI = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const json = await response.json();
            setData(json);
            if (!response.ok) {
                throw new Error('ERROR: .JSON file was not received from the API');
            }
        }   
        fetchFromAPI()
    });

    function scoreHandler(e) {
        let chosenCard = e.target.alt;
        console.log(cardList.includes(chosenCard));
        if (cardList.includes(chosenCard)) {
            if (score > highScore || (score === 1 && highScore === 0)) {
                setHighScore(score);
            }
            console.table(cardList);
            setScore(0);
            setCardList([]);
            console.table(cardList);
        } else {
            setScore(score + 1);
            if (score > highScore) {
                setHighScore(score);
            }
            setCardList([...cardList, chosenCard]);
            console.table(cardList);
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