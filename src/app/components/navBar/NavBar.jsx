'use client'

import { useEffect, useState } from "react";
import NavBarDesktop from "./components/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile";

const NavBar = () => {
    // const [windowWhidth, setWindowWidth] = useState(window.innerWidth)

    // useEffect(() => {
    //     const handleResize = () => {
    //       setWindowWidth(window.innerWidth);
    //     };
    
    //     window.addEventListener('resize', handleResize);
    
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);
    function useWindowSize() {

      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    
      useEffect(() => {
    
        function handleResize() {
        
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener("resize", handleResize);
         
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }, []); 
      return windowSize;
    }

    const size = useWindowSize();

  return (
    <>
        {size.width > 1024 ? <NavBarDesktop/> : <NavBarMobile/>}
    </>
  )
}

export default NavBar