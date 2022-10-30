import React from 'react';

const ShowQuran = ({ quran }) => {
    const { id, name, transliteration, type, verses } = quran;
    return (
        <div className='col-lg-10 mx-auto gy-2 '>
            <div className='card text-white border bg-black'>
                <h6>{name}</h6>
                <h4>{transliteration}</h4>
                <hr />
                <p>{verses.map(verse =>
                    <p className='end'>{verse.text}</p>
                )
                }</p>
            </div>
        </div>
    );
};

export default ShowQuran;