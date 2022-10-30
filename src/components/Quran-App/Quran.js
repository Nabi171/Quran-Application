import React, { useState, useEffect } from 'react';

const Quran = () => {
    const [qurans, setQuran] = useState([]);


    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json').then(res => res.json()).then(data => setQuran(data))
    }, [])

    return (
        <div>
            {/* <p>{quran.name}</p> */}
            {
                qurans.map(quran =>
                    <li>{quran.name}</li>
                )
            }
        </div>
    );
};

export default Quran;