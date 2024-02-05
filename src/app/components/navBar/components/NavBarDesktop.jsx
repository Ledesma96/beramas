'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBarDesktop = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className='navBar-desktop'>
      <Link href='/' className='navBar-desktop_div'>
        <img className='navBar-desktop_div_img' src="/images/logo.png" width={50} height={40} alt="Logotipo del local" />
      </Link>
      <section className='navBar-desktop_section'>
          <Link className={`navBar-desktop_section_link ${pathName == '/' ? 'active' : ''}`} href='/' aria-label='inicio'>INICIO</Link>
        <div className='navBar-desktop_section_div' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link className={`navBar-desktop_section_link ${pathName.startsWith('/products') || pathName.startsWith('/detail') ? 'active' : ''}`} href='/products' aria-label='productos'>PRODUCTOS</Link>
          <aside onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className={open ? 'navBar-desktop_section_div_aside-on' : 'navBar-desktop_section_div_aside-off'}>
            <Link className='navBar-desktop_section_div_aside_lnik' href={`/products/sofas`} aria-label='sofas'>Sofás</Link>
            <Link className='navBar-desktop_section_div_aside_lnik' href={`/products/mesas`} aria-label='mesas'>Mesas</Link>
            <Link className='navBar-desktop_section_div_aside_lnik' href={`/products/muebles`} aria-label='muebles'>Muebles</Link>
          </aside>
        </div>
        <Link className={`navBar-desktop_section_link ${pathName == '/contact' ? 'active' : ''}`} href='/contact' aria-label='Contactanos'>CONTACTO</Link>
        <Link className={`navBar-desktop_section_link ${pathName == '/aboutus' ? 'active' : ''}`} href='/aboutus' aria-label='nosotros'>NOSOTROS</Link>
        <Link className={`navBar-desktop_section_link ${pathName == '/faqs' ? 'active' : ''}`} href='/faqs' aria-label='respuestas'>FAQ&apos;S</Link>
      </section>
    </div>
  )
}

export default NavBarDesktop