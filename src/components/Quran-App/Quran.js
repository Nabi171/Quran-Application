import React, { useState, useEffect } from 'react';
import ShowQuran from './ShowQuran';

const Quran = () => {
    const [qurans, setQuran] = useState([]);
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json').then(res => res.json()).then(data => setQuran(data))
    }, [])

    return (
        <div className='container'>
            {/* <p>{quran.name}</p> */}
            <div className='row'>
                {
                    qurans.map(quran =>
                        <ShowQuran quran={quran}
                            key={quran.id}
                        ></ShowQuran>

                    )
                }
            </div>
        </div>
    );
};

export default Quran;