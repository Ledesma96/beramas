'use client'

import { useEffect, useState } from "react";
import NavBarDesktop from "./components/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile";

const NavBar = () => {
    const [windowWhidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <>
        {windowWhidth > 1024 ? <NavBarDesktop/> : <NavBarMobile/>}
    </>
  )
}

export default NavBar