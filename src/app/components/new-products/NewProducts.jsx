import Link from 'next/link'
import React from 'react'
import NewCard from './compnents/NewCard.jsx'

const NewProducts = () => {
    
  return (
    <main className='new-produts'>
        <aside className='new-produts_aside'>
            <span className='new-produts_aside_span'></span>
            <p className='new-produts_aside_p'>L<span className='new-produts_aside_p_span'>o más vendido</span></p>
        </aside>
        <NewCard></NewCard>
        <Link className='new-products_link' href='/products'> <span className='span'>Ver todos los productos</span></Link>
    </main>
  )
}

export default NewProducts