import { useState, useEffect } from "react";

export default function FetchDog() {
    const [img, setImg] = useState(null);
    const [error, setError] = useState('');
    const url = 'https://dog.ceo/api/breeds/image/random';

    const fetchNewDog = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            if (data.status != 'success') {
                throw new Error(data.status);
            }
            setImg(data.message);
        }catch(error){
            setError(error.message)
        }
    };
    return (
        <div>
            <button onClick={fetchNewDog}>Get another pic!</button>
            {error && <p>{error}</p>}
            <img src={img} alt="" />
        </div>
    );
}