
import Header from '../components/Header'
import Hero from '../components/Hero'
import Planta from '../components/Planta'
import SEO from '../components/SEO'
import Carousel from '../components/Carousel'
import Directions from '../components/Directions'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <SEO
        title="Loteamento Cristo Rei | O seu lugar ao sol!"
      />
      <Header />
      <Hero />
      <Planta />
      <Carousel />
      <Directions/>
      <Contact />
    </>
  )
}
