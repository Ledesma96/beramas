import Link from 'next/link'
import React from 'react'
import NewCard from './compnents/NewCard.jsx'

const NewProducts = () => {
    
  return (
    <main className='new-produts'>
        <aside className='new-produts_aside'>
            <span className='new-produts_aside_span'></span>
            <p className='new-produts_aside_p'>N<span className='new-produts_aside_p_span'>uevos producto</span>s</p>
        </aside>
        <NewCard></NewCard>
        <Link className='new-products_link' href='/products'> <span className='span'>Ver todos los productos</span></Link>
    </main>
  )
}

export default NewProducts