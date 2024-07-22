import { useEffect, useState } from "react";

function Card({ card, id, scoreHandler}) {
    const [data, setData] = useState();
    const [click, setClick] = useState();
    
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
                
    return (
        <div className="card" onClick={scoreHandler}>
            {data ? (
                <>
                    <img src={data.sprites.back_default} alt={data.name} />
                    <p>{data.species.name}</p>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}

export default Card