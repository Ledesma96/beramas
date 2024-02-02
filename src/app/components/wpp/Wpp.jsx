import Link from 'next/link'
import React from 'react'

const Wpp = () => {
  return (
    <Link href='https://api.whatsapp.com/send?phone=5491130180031&text=Hola%20Beramassillones%20😊%20Quisiera%20informacion%20acerca%20de...' target='blank'>
      <img className='btn-wpp' src="/images/WhatsApp.svg.webp" alt="Botón flotante de whatsapp" />
    </Link>
  )
}

export default Wpp