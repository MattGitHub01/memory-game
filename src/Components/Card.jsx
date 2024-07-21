import { useEffect, useState } from "react";

function Card() {
    const [id, setId] = useState(1);
    const [data, setData] = useState();

    function setIdFunc() {

    }

    useEffect(() => {
        const fetchFromAPI = async () => {
            if (id < 12) {
                setId(id + 1);
                setIdFunc()
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {mode: 'cors'});
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw new Error('ERROR: .JSON file was not received from the API');
                }
                fetchFromAPI();
            }
        }
    }, [id], );
                
    return (
        <div className="card">
            {data ? (
                <>
                    <img src={data.sprites.back_default} alt={data.name} />
                    <span>{data.name}</span>
                </>
            ) : (
                <h2>Loading...</h2>
            )};
        </div>
    )
}

export default Card