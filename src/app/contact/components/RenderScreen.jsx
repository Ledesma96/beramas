'use client'
import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Info from './Info'
import { Change } from './Change'
const options = [
    {state: 'Berazategui', phone: '+5491130180031', location:'Av.Mitre 1110 e/11 y 12 Berazategui', src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.947674407386!2d-58.212198026215006!3d-34.75691090569121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f48bc5667bf%3A0xaed7ade0228c5063!2sBERA%20POSITIVO!5e0!3m2!1ses-419!2sar!4v1705326807783!5m2!1ses-419!2sar"},
    {state: 'La plata', phone: '+5492216174932', location: 'Calle 50 693 e/8 y 9 La plata', src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.5357676465867!2d-57.95294782799634!3d-34.91626847870207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6308d538c8f%3A0xf92033edc9ab95cf!2sC.%2050%20693%2C%20B1900ATA%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1762794419869!5m2!1ses-419!2sar"}
]

const RenderScreen = () => {
    const [country, setCountry] = useState(options[0]);

    const changeCountry = (value) =>{
        const selected = options.find(op =>  op.state === value);
        setCountry(selected);
    }
    return (
        <div className='contact-container'>
            <Change changeCountry={changeCountry} country={country}/>
            <Header />
            <Form></Form>
            <Info country={country}/>
        </div>
    )
}

export default RenderScreen