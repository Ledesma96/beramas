import React, { useState, useEffect } from 'react'

const FiltersProducts = ({setSubCategory}) => {
    const [open, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const handleClear = () => {
        setOpen(false)
    }

    const handleFilters = () => {
        if(windowWidth < 768){
            setOpen(!open)
        } else {
            setOpen(true)
        }
    }
    
  return (
    <div className='filters'>
        <div className='filters_title' onClick={handleFilters}>
            <h5>Filtros</h5>
            {windowWidth < 768 && <svg className={open ? 'svg-on' : 'svg-off'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
            </svg>}
            
        </div>
        <form action="" className={windowWidth < 768 ? (open ? 'filters_form-on' : 'filters_form-off') : 'filters_form-on'}>
            <div className='filters_form_div'>
                <input className='filters_form_div_input' type="radio" value='sillones' onChange={(e) => setSubCategory(e.target.value)} name="myCheckbox" id="myCheckbox"/>
                <span>Sillones</span>
            </div>
            <div className='filters_form_div'>
                <input className='filters_form_div_input' type="radio" value='esquineros' onChange={(e) => setSubCategory(e.target.value)}  name="myCheckbox" id="myCheckbox"/>
                <span>Esquineros</span>
            </div>
            <div className='filters_form_div-btn'>
                <button className='btn' onClick={handleClear}>Limpiar</button>
            </div>
        </form>
    </div>
  )
}

export default FiltersProducts