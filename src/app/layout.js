import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import { Footer, NavBar, Wpp } from './components/index.js'
import './globals.scss'
import Script from 'next/script.js'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bera positivo - Inicio',
  description: 'Explora nuestra colección de sofás y mesas diseñados para elevar el confort y el estilo de tu hogar. Descubre sofisticados diseños y calidad excepcional que transformarán tu sala de estar en un espacio acogedor y moderno. Encuentra el sofá y la mesa perfectos para tu hogar hoy mismo.',
  keywords: 'bera positivo, sillones berazategui, berazategui sillones, bera, Berazategui, Muebles, Sofás, Berazategui muebles, Muebles Berazategui, Sofás y Mesas, Muebles para el Hogar, Decoración de Interiores, Diseño de Interiores, Mobiliario Moderno, Tienda de Muebles Online, Ofertas de Muebles, Envío Gratuito de Muebles, Confort y Estilo para tu Hogar, Experiencia de Compra Online, Envios al interior, Sofás, Sillones, Esquineros, Sillas, Mesas, Mesas y sillas, Deco y hogar'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='canonical' href='https://www.beramassillones.com/' key='canonical'></link>
        <link rel="preload"></link>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1RFWNPLH2Q"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RFWNPLH2Q');
          `}
        </Script>
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
