import React, { useState, useEffect } from 'react';

const Quran = () => {
    const [quran, setQuran] = useState([]);
    useEffect(() => {
        fetch('http://api.alquran.cloud/v1/surah').then(res => res.json()).then(data => setQuran(data));
    }, [])
    return (
        <div>
            <li className='text-white'>{quran.revelationType}</li>
        </div>
    );
};

export default Quran;