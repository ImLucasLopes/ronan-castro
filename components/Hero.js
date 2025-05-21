'use client'

import { useEffect, useRef } from 'react'

export default function Hero({ hero }) {
  const sectionRef = useRef(null)

  // Bloquear clique com o botão direito
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('contextmenu', handleContextMenu)
    }

    return () => {
      if (section) {
        section.removeEventListener('contextmenu', handleContextMenu)
      }
    }
  }, [])

  // Efeito parallax ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (section) {
        const scrollPosition = window.scrollY
        // Ajusta a posição do fundo (0.3 é a velocidade do parallax)
        section.style.backgroundPositionY = `${scrollPosition * 0.3}px`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="bg-[#F5EFE7] flex md:py-[6%] md:px-[8%]">
      <div
        ref={sectionRef}
        className="relative bg-[url('/images/img-hero.webp')] bg-cover bg-center bg-no-repeat py-[8%] h-screen w-full select-none"
        style={{ backgroundPositionY: '0px', backgroundColor: '#F5EFE7' }} // Posição inicial do fundo
      >
        {/* Camada transparente para bloquear interações */}
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        {/* Contêiner para o texto, com posicionamento e responsividade */}
        <div className="relative z-10 flex flex-col items-center py-[50%] md:py-[2%] h-full text-center">
          <h1
            // ref={titleUpperCase}
            className="font-poppins font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] drop-shadow-lg"
          >
            <span className="block mb-[8%]">{hero.title.toUpperCase()}</span>
            <span className="block mb-[20%]">
              {hero.subtitle.toUpperCase()}
            </span>
          </h1>
          <p className="font-light text-lg sm:text-lg md:text-3xl text-[#F5EFE7] drop-shadow-md">
            {hero.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
