'use client'
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustonRightArrow from "./CustonRightArrow";


const Pasarela = ({images}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const handleRize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleRize)

    return() => {
      window.removeEventListener('resize', handleRize)
    }
  },[])

  const transformedImages = images.map((url, index) => ({
    original: apiUrl + url,
    thumbnail: apiUrl + url, 
  }));
        
  return (
    <div className='main-container'>
       <ImageGallery items={transformedImages}
                      showPlayButton={false}
                      showFullscreenButton={true}
                      showBullets={true}
                      showThumbnails={windowWidth > 1023 ? true  : false}
                      disableThumbnailScroll={true}
                      thumbnailPosition="left"
                      autoPlay={false}
                      renderLeftNav={(onClick, disabled) => (
                        <CustomLeftArrow  onClick={onClick} />
                      )}
                      renderRightNav={(onClick, disabled) => (
                        <CustonRightArrow onClick={onClick} />
                      )}/>
    </div>
  )
}

export default Pasarela