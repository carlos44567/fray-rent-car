import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWebsiteSection } from '../services/websiteContent'

function Hero() {
  const [heroContent, setHeroContent] = useState({
    titleLine1: 'FRAY',
    titleLine2: 'RENT CAR',
    subtitle: 'Alquiler de vehículos premium',
    buttonPrimary: 'Reservar Coche',
    buttonSecondary: 'Ver Flota'
  })

  useEffect(() => {
    loadHeroContent()
  }, [])

  const loadHeroContent = async () => {
    try {
      const response = await getWebsiteSection('hero')
      if (response.data) {
        setHeroContent({
          titleLine1: response.data.title_line1?.value || 'FRAY',
          titleLine2: response.data.title_line2?.value || 'RENT CAR',
          subtitle: response.data.subtitle?.value || 'Alquiler de vehículos premium',
          buttonPrimary: response.data.button_primary?.value || 'Reservar Coche',
          buttonSecondary: response.data.button_secondary?.value || 'Ver Flota'
        })
      }
    } catch (error) {
      console.log('Hero content using defaults - API may not be available yet')
    }
  }

  const backgroundStyle = {
    backgroundImage: "url('/images/hero/hero-car.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    backgroundAttachment: 'fixed'
  }

  return (
    <section 
      className="relative min-h-screen bg-[#050505] overflow-hidden pt-[90px]"
      style={backgroundStyle}
    >
      {/* CAPAS DE ESCENA - Glows y efectos integrados */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow masivo dorado - envuelve la escena */}
        <div className="absolute -right-48 top-1/3 w-[1800px] h-[900px] bg-gradient-radial from-[#c9a227]/70 via-[#c9a227]/25 to-transparent rounded-full blur-[400px] opacity-85" />
        
        {/* Overlay gradual izquierda - integra texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent z-5" />
        
        {/* Overlay oscuro inferior - profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000]/50 z-5" />
        
        {/* Vignette lateral derecha - suaviza bordes */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#000000]/30 z-5" />
      </div>

      {/* CONTENIDO - Texto y botones sobre escena */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-[calc(100vh-90px)] flex items-center z-10">
        <div className="w-full lg:w-1/2">
          <div className="space-y-8">
            {/* Título cinematográfico */}
            <div>
              <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-3 drop-shadow-2xl">
                {heroContent.titleLine1}
              </h1>
              <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#e5c158] to-[#c9a227] leading-[0.9] drop-shadow-lg">
                {heroContent.titleLine2}
              </h2>
            </div>

            {/* Subtítulo con estilo */}
            <p className="text-xl text-gray-100 font-light tracking-wide leading-relaxed max-w-md drop-shadow-lg">
              {heroContent.subtitle}
            </p>

            {/* Botones premium */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/booking" 
                className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-black font-black text-sm uppercase tracking-widest rounded-lg hover:from-[#d4af37] hover:to-[#c9a227] transition-all duration-300 shadow-2xl shadow-[#c9a227]/60 hover:shadow-[#c9a227]/80 hover:scale-105 transform"
              >
                {heroContent.buttonPrimary}
              </Link>
              <Link 
                to="/fleet" 
                className="px-8 py-4 border-2 border-[#c9a227]/80 text-[#c9a227] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#c9a227]/20 hover:border-[#c9a227] transition-all duration-300"
              >
                {heroContent.buttonSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent z-20" />
    </section>
  )
}

export default Hero

