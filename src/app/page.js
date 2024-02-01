import  { Carrousel, NewProducts } from "./components/index.js";

export default function Home() {
  return (
    <>
      <Carrousel/>
      <div className="home_div">
        <h1 className="home_div_h1">Diseñamos tu espacio</h1>
        <p className="home_div_p">¡Te ofrecemos ascesoramiento gratuito online!</p>
      </div>
      <NewProducts/>
    </>
  )
}