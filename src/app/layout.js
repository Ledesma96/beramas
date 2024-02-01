import { Inter } from 'next/font/google'
import './globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Footer, NavBar, Wpp } from './components/index.js'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bera positivo',
  description: 'Explora nuestra colección de sofás y mesas diseñados para elevar el confort y el estilo de tu hogar. Descubre sofisticados diseños y calidad excepcional que transformarán tu sala de estar en un espacio acogedor y moderno. Encuentra el sofá y la mesa perfectos para tu hogar hoy mismo.',
  keywords: 'Sofás y Mesas, Muebles para el Hogar, Decoración de Interiores, Diseño de Interiores, Mobiliario Moderno, Tienda de Muebles Online, Ofertas de Muebles, Envío Gratuito de Muebles, Confort y Estilo para tu Hogar, Experiencia de Compra Online, Envios al interior, Sofás, Sillones, Esquineros, Sillas, Mesas, Mesas y sillas, Deco y hogar'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='canonical' href='http:127.0.0.1:3001' key='canonical'></link>
        
      </head>
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Wpp/>
        <Footer/>
      </body>
    </html>
  )
}
