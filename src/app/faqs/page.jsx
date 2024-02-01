import React from 'react'
import SeoFaqs from './components/SeoFaqs'

const page = () => {
  return (
    <>
        <SeoFaqs></SeoFaqs>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ¿Cuáles son los materiales de fabricación de sus sillones y mesas?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Utilizamos materiales de alta calidad,</strong> como maderas resistentes y tapicería duradera, para garantizar la durabilidad y comodidad de nuestros productos.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ¿Puedo personalizar el color y la tela de los sillones?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong> Sí, ofrecemos opciones de personalización en términos de colores y telas.</strong> Consulta con nuestro equipo de atención al cliente para conocer las opciones disponibles.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ¿Cómo elijo el tamaño adecuado para mis muebles?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Ofrecemos medidas detalladas en nuestro sitio web, y nuestro equipo está disponible para proporcionar asesoramiento sobre las dimensiones adecuadas para tu espacio.</strong> También puedes visitar nuestra tienda para probar los muebles.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                ¿Cuál es la política de envío y entrega?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Tenemos políticas claras de envío y entrega.</strong> La tarifa y el tiempo de entrega pueden variar según la ubicación. Consulta nuestra sección de envíos o comunícate con nosotros para obtener información específica.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                ¿Ofrecen garantía en sus productos?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Sí, todos nuestros productos vienen con garantías</strong> Revisamos cada artículo antes de la entrega, y cualquier problema posterior puede ser cubierto por nuestra política de garantía. Infórmate sobre los términos específicos.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                ¿Puedo devolver o cambiar un producto si no estoy satisfecho?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Sí, contamos con una política de devolución y cambio. </strong>  Si no estás satisfecho con tu compra, comunícate con nosotros dentro del período designado, y te ayudaremos a procesar la devolución o cambio.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                ¿Ofrecen servicios de montaje para los muebles?
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Sí, proporcionamos servicios de montaje para la mayoría de nuestros productos, ya sea como parte de la compra o a un costo adicional. </strong>  Infórmate sobre esta opción al realizar tu pedido.<code></code>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page