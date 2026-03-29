import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

function Footer({ 
  phone = '+34 900 123 456',
  email = 'info@frayrentcar.com', 
  address = 'Madrid, España',
  copyright = '© 2025 FRAY RENT CAR. Todos los derechos reservados.'
}) {
  return (
    <footer className="bg-[#030303] border-t border-[#c9a227]/30">
      {/* Línea superior decorativa */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          
          {/* BRANDING - Izquierda mejorado */}
          <div className="flex flex-col items-start">
            {/* Logo + Nombre - Compact pero elegante */}
            <Link to="/" className="flex items-start gap-4 mb-12 group">
              {/* Logo Circle - Consistente con Navbar */}
              <div className="relative flex-shrink-0">
                {/* Circle limpio */}
                <div className="relative w-20 h-20 rounded-full border-2 border-[#c9a227]/60 bg-[#0a0a0a] flex items-center justify-center overflow-hidden shadow-lg shadow-[#c9a227]/25 group-hover:shadow-[#c9a227]/40 transition-all">
                  <img
                    src="/images/logo/logo.png"
                    alt="FRAY RENT CAR"
                    className="w-14 h-14 object-cover"
                    style={{
                      clipPath: 'circle(50%)',
                      filter: 'brightness(1) contrast(1.1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68220] flex items-center justify-center text-black font-black text-xs">
                    FR
                  </div>
                </div>
              </div>
              
              {/* Branding text - más premium */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-black text-white tracking-widest leading-tight">FRAY</h2>
                <div className="flex items-baseline gap-1 mt-1">
                  <p className="text-[#c9a227] text-base font-black uppercase tracking-widest">RENT</p>
                  <p className="text-[#c9a227]/60 text-base font-bold uppercase tracking-widest">CAR</p>
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-light mt-2">Premium Rental</p>
              </div>
            </Link>

            {/* Descripción breve */}
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Experiencia de alquiler de vehículos premium en Madrid. Libertad, lujo y confort en cada viaje.
            </p>

            {/* Contacto - mejor estructura */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#c9a227] font-bold mb-4">Contacto</p>
              
              <a 
                href={`tel:${phone}`} 
                className="flex items-center gap-3 text-gray-400 hover:text-[#c9a227] transition-colors group/contact"
              >
                <div className="w-8 h-8 rounded-full bg-[#c9a227]/10 group-hover/contact:bg-[#c9a227]/20 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-[#c9a227]" />
                </div>
                <span className="text-sm font-medium">{phone}</span>
              </a>
              
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-3 text-gray-400 hover:text-[#c9a227] transition-colors group/contact"
              >
                <div className="w-8 h-8 rounded-full bg-[#c9a227]/10 group-hover/contact:bg-[#c9a227]/20 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-[#c9a227]" />
                </div>
                <span className="text-sm font-medium">{email}</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-[#c9a227]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#c9a227]" />
                </div>
                <span className="text-sm font-medium">{address}</span>
              </div>
            </div>
          </div>

          {/* MOCKUP - Derecha con presencia */}
          <div className="relative flex justify-end">
            <div className="relative group">
              {/* Glow backdrop */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#c9a227]/15 to-[#c9a227]/5 rounded-3xl blur-3xl -z-10 group-hover:blur-4xl transition-all duration-300" />
              
              {/* Contenedor mockup elegante */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-[#c9a227]/25 shadow-2xl shadow-[#c9a227]/15 group-hover:border-[#c9a227]/50 group-hover:shadow-[#c9a227]/35 transition-all">
                
                {/* Línea decorativa superior */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
                
                {/* Imagen mockup */}
                <img 
                  src="/images/ui/phone-mockup.png"
                  alt="App FRAY RENT CAR"
                  className="h-64 w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent mb-8" />

        {/* Footer inferior */}
        <div className="text-center">
          <p className="text-gray-500 text-xs font-light mb-3 tracking-wide">
            {copyright}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-[1px] bg-[#c9a227]/30" />
            <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest">
              Premium Rental Experience
            </p>
            <div className="w-8 h-[1px] bg-[#c9a227]/30" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

