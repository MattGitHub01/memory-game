import { useEffect, useState } from "react";

function Card() {
    const [id, setId] = useState(1);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchFromAPI = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
            const json = await response.json();
            setData(json);
            if (!response.ok) {
                throw new Error('ERROR: .JSON file was not received from the API');
            }
        }
        fetchFromAPI()
    }, );
                
    return (
        <div className="card">
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