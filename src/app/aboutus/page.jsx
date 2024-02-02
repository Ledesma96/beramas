import React from 'react'
import SeoAboutUs from './components/SeoAboutUs'

const page = () => {
  return (
    <>
        <SeoAboutUs></SeoAboutUs>
        <div className='aboutus-container'>
            <div className='aboutus-container_div'>
                <div className='aboutus-container_div-container-img'>
                    <img className='aboutus-container_div_img' src="/images/BANNER-COMEDOR-ESTEEEE.webp" alt="" />
                </div>
                <h1 className='aboutus-container_div_h1'>S<span className='span'>OBRE NOSOTROS</span></h1>
                <p className='aboutus-container_div_p'> Somos Beramasssillones una empresa con mas de 10 años en el rubro. Contamos con fabricación propia para otorgar a cada creación el confort y la funcionalidad que sus espacios merecen.<br></br>                               Trabajamos con los mejores productos del mercado para garantizarle a nuestros clientes la seguridad de cada producto como merecen. Nuestra política se basa en la atención personalizada para lograr la conformidad y satisfacción de cada cliente</p>
            </div>
            <section className='aboutus-container_section'>
                <div className='aboutus-container_section_div'>
                    <svg className='aboutus-container_section_div_icon' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Envios al interior</h4>
                        <p className='aboutus-container_section_div_aside_p'>Realizamos envios al todo el pais. Consultanos para mas información.</p>
                    </aside>
                </div>
                <div className='aboutus-container_section_div'>
                    <svg className='aboutus-container_section_div_icon' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Garantia estructural</h4>
                        <p className='aboutus-container_section_div_aside_p'>Nuestros productos cuentan con una garantía estructural de 5 años.</p>
                    </aside>
                </div>
                <div className='aboutus-container_section_div'>
                    <svg className='aboutus-container_section_div_icon' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Envios en 48hs</h4>
                        <p className='aboutus-container_section_div_aside_p'>Contamos con productos para entrega inmediata.</p>
                    </aside>
                </div>
                <div className='aboutus-container_section_div'>
                    <svg fill="currentColor" className='aboutus-container_section_div_icon' xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"> 
                        <path d="M80-80v-481l280-119v80l200-80v120h320v480H80Zm80-80h640v-320H480v-82l-200 80v-78l-120 53v347Zm280-80h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm280-320H680l40-320h120l40 320ZM160-160h640-640Z"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Somos fabricantes</h4>
                        <p className='aboutus-container_section_div_aside_p'>Todos nuestros productos son totalmente personalizables.</p>
                    </aside>
                </div>
                <div className='aboutus-container_section_div'>
                    <svg fill="currentColor" className='aboutus-container_section_div_icon' xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50">
                        <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Calidad premium</h4>
                        <p className='aboutus-container_section_div_aside_p'>Trabajamos con los mejores materiales del mercado para garantizar una mayor durabilidad.</p>
                    </aside>
                </div>
                <div className='aboutus-container_section_div'>
                    <svg className='aboutus-container_section_div_icon' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                        <path d="M21,12.418V11A9,9,0,0,0,3,11v1.418A5,5,0,0,0,5,22H7V12H5V11a7,7,0,0,1,14,0v1H17v8H13v2h6a5,5,0,0,0,2-9.582Z"/>
                    </svg>
                    <aside className='aboutus-container_section_div_aside'>
                        <h4 className='aboutus-container_section_div_aside_h4'>Atención personalizada</h4>
                        <p className='aboutus-container_section_div_aside_p'>Brindamos atención personalizada para hacer de tu hogar el lugar que imaginas.</p>
                    </aside>
                </div>
            </section>
        </div>
    </>
  )
}

export default page