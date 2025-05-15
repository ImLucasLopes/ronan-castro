import Hero from '../components/Hero'
import About from '../components/About'
import ClientShowcase from '../components/ClientShowcase'
import Footer from '../components/Footer'
import content from '../data/content.json'

export default function Home() {
  return (
    <>
      <Hero hero={content.hero} />
      <About about={content.about} />
      <ClientShowcase clientShowcase={content.clientShowcase} />
      <Footer footer={content.footer} />
    </>
  )
}
