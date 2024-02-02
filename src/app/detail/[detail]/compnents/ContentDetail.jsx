'use client'
import React, {useState, useEffect, Suspense} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Pasarela from './Pasarela'
import Link from 'next/link'
import { DetailLoader } from '@/app/components'

const ContentDetail = ({state}) => {
    const params = useParams()
    const id = params.detail
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(apiUrl + `api/v1/products/filter/${id}`)
            try {
                if(response.data.success){
                    setProduct(response.data.product)
                    setImages(response.data.product.thumbnail)
                    setLoading(false)
                } else {
                    console.log('Producto no encontrado')
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])
  return (
    <>
    {loading ? 
        <DetailLoader/>
        :
    <div className='detail-container'>
        <Pasarela images={images}/>
        <main className='detail-container_main'>
                <h1 className='detail-container_main_h1'>{product.name}</h1>
                <p className='detail-container_main_p'><span className='detail-container_main_p_span'></span> Este artículo es totalmente personalizable</p>
                <section className='detail-container_main_section'>
                    <div className='detail-container_main_section_div'>
                        <svg className='detail-container_main_section_div_svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                        </svg>
                        <p className='detail-container_main_section_div_p'>Garantía estructural</p>
                    </div>
                    <div className='detail-container_main_section_div'>
                        <svg className='detail-container_main_section_div_svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                        <p className='detail-container_main_section_div_p'>Envios a todo el país</p>
                    </div>
                    <div className='detail-container_main_section_div'>
                        <svg className='detail-container_main_section_div_svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                        </svg>
                        <p className='detail-container_main_section_div_p'>Disponible</p>
                    </div>
                </section>
                <div className='detail-container_main_div'>
                    <h5 className='detail-container_main_div_h5'>D<span className='detail-container_main_div_h5_span'>escripcion:</span></h5>
                    <p className='detail-container_main_div_p'>{product.description}</p>
                </div>
                <Link className='detail-container_main_Link' href={`https://api.whatsapp.com/send?phone=5491130180031&text=Hola%20Beramassillones%20😊%20Quisiera%20informacion%20acerca%20de%20${encodeURIComponent(product.name)}`} target='blank'>CONSULTAR</Link>
            </main>
        </div>
    }
    </>
  )
}

export default ContentDetail