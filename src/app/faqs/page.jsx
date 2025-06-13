
export const metadata = {
    title: "Bera positivo - Faq's ",
    description: 'Encuentra respuestas claras y completas a las preguntas más comunes sobre nuestros productos y servicios. Desde información sobre envíos y políticas de devolución hasta detalles sobre garantías y opciones de personalización, nuestra sección de Preguntas Frecuentes está diseñada para brindarte la tranquilidad y confianza que necesitas al realizar tus compras. Explora nuestras respuestas detalladas y toma decisiones informadas mientras descubres todo lo que necesitas saber para aprovechar al máximo tu experiencia de compra con nosotros',
    keywords: 'Preguntas frecuentes, FAQ, Ayuda, Soporte al cliente, Información, Envíos, Devoluciones, Garantías, Políticas, Servicio al cliente, Ayuda en línea, Consultas comunes, Soluciones, Resolución de problemas, Consultas, Asistencia, Detalles, Compras, Información útil, Aclaraciones'
}
const page = () => {
  return (
    <>
        <div className="accordion pb-4" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ¿Cuáles son los materiales de fabricación de sus sillones?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Utilizamos materiales de alta calidad.</strong> La estructura esta compuesta por madera de saligna rodeado de cincha elástica italiana y cobertura de rafia de pasacalles, sobre eso goma espuma de alta densidad y tapizado con telas de primera. Doble costuras en todas sus terminaciones y almohadones
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
                    <strong>Tenemos políticas claras de envío y entrega.</strong> La tarifa y el tiempo de entrega pueden variar según la ubicación. Comunícate con nosotros para obtener información específica.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                ¿Ofrecen garantía en sus sillones?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Sí, todos nuestros sillones cuentan con garantías</strong> Revisamos cada producto antes de la entrega, y cualquier inconveniente posterior puede ser cubierto por nuestra política de garantía. Infórmate sobre los términos específicos con nuestro equipo.
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page