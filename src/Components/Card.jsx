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
        console.log(cardList);
        let chosenCard = e.target.id;
        console.log(chosenCard);
        if (cardList.includes(chosenCard)) {
            score > highScore ?? setHighScore(score);
            setScore(0);
            setCardList([]);
            alert('Repeat Card:')
            alert(cardList);
        } else {
            setCardList([...cardList, e.target.id]);
            setScore(score + 1);
            alert('Not Repeat Card')
            alert(cardList);
        }
    }

    return (
        <div className="card" onClick={scoreHandler}>
            {data ? (
                <>
                <img src={data.sprites.front_default} alt={data.name} id={data.name} />
                <p>{data.name}</p>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}

export default Card