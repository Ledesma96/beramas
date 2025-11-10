import React from 'react'

export const Change = ({changeCountry, country}) => {
    return (
        <div className='container-buttons'>
            <button className={`${country.state === 'Berazategui' && 'btn-active'}`} onClick={() => changeCountry('Berazategui')}>Berazategui</button>
            <button className={`${country.state === 'La plata' && 'btn-active'}`} onClick={() => changeCountry('La plata')}>La plata</button>
        </div>
    )
}
