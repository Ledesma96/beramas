'use client'
import  Link  from "next/link"
import {useState} from 'react'

const NavBarMobile = () => {
    const [open, setOpen] = useState(false)
    const [openProducts, setOpenProducts] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleOpenProducts = () => {
        setOpenProducts(!openProducts)
    }
    
  return (
    <div className='navBarMobile'>
        <section className='navBarMobile_section'>
            {open ?
                <svg className='navBarMobile_section_svg-on' onClick={() => {handleOpen(), setOpenProducts(false)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                    :
                 <svg className='navBarMobile_section_svg-off'  onClick={() => {handleOpen(), setOpenProducts(false)}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                }
            <div className={open ? 'links-open' : 'links-close'}>
                <Link onClick={handleOpen} className="link" href='/'>INICO</Link>
                <div onClick={handleOpenProducts} className="navBarMobile_section_div_div">
                    <Link className="link" href=''>PRODUCTOS</Link>
                    <svg style={{marginTop: '8px', marginLeft: '6px'}} color="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div className={openProducts ? "navBarMobile_section_div_div-on" : 'navBarMobile_section_div_div-off'}>
                    <Link onClick={() => { handleOpen(); handleOpenProducts(); }} className="links-category" href={`/products/sofas`}>SOFÁS</Link>
                    <Link onClick={() => { handleOpen(); handleOpenProducts(); }} className="links-category" href={`/products/mesas`}>MESAS</Link>
                    <Link onClick={() => { handleOpen(); handleOpenProducts(); }} className="links-category" href={`/products/sillas`}>SILLAS</Link>
                </div>
                <Link onClick={handleOpen} className="link" href='/contact'>CONTACTO</Link>
                <Link onClick={handleOpen} className="link" href='/aboutus'>NOSOTROS</Link>
                <Link onClick={handleOpen} className="link" href='/faqs'>FAQ&apos;S</Link>
            </div>
        </section>
        <Link href='/' className='navBarMobile_div'>
            <img className='navBarMobile_div_img' src="images/logo.png" width={50} height={40} alt="Logotipo del local" />
            <p className='navBarMobile_div_name'>Bera<span className='navBarMobile_div_name_span'>+</span></p>
        </Link>
    </div>
  )
}

export default NavBarMobile