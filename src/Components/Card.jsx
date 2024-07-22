import { useEffect, useState } from "react";

function Card ({ id, cardList, setCardList, score, setScore, highScore, setHighScore }) {
    const [data, setData] = useState();
    const [cardId, setCardId] = useState({id});

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
        if (cardList.some((c) => c.id === cardId.id)) {
            if (score >= highScore) {
                setHighScore(score);
            }
            setScore(0);
            setCardList([]);
        } else {
            setScore(score + 1);
            if (score > highScore) {
                setHighScore(score);
            }
            setCardList([...cardList, cardId]);
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