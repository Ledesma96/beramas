import React from 'react'
import Link from 'next/link'

const Card = ({items}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className='container-card'>
    {items.map((item) =>(
        <div key={item._id} className='products-card'>
            <img className='products-card_img'
             src={apiUrl + item.thumbnail[0]} 
             alt={item.name} 
             loading='lazy'
             decoding='async'/>
            <section className='products-card_section'>
                <h2 className='products-card_section_h5'>{item.name}</h2>
                <Link className='products-card_section_link' href={`/detail/${item._id}`}><span className='span'>DETALLES</span></Link>
            </section>
        </div>
    ))}
    </div>
  )
}

export default Card