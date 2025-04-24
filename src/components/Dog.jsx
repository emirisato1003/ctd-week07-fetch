import { useEffect, useState } from "react";

export default function Dog() {
    const [img, setImg] = useState(null);
    const [error, setError] = useState('');
    const url = 'https://dog.ceo/api/breeds/image/random';

    useEffect(() => {
        let isRan = false;
        // fetchDog is now an IIFE ( Immediately Invoked Function Expression ) 
        (async () => {
            console.log('useEffect running');
            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.status)
                }
                const data = await res.json()
                if(data.status != 'success'){
                    throw new Error(data.status)
                }
                // check if isRan is false then setImg()
                if(isRan){
                    console.log('skipped setImg');
                }else{
                    console.log('ran setImg()');
                    setImg(data.message)
                }
            }catch(error){
                setError(error.message)
            }
        })();
        return () => {
            console.log('cleanup performed');
            isRan = true
        }
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            <img src={img} alt="" />
        </>
    );
}