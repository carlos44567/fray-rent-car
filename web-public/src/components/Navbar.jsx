import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { name: 'Inicio', to: '/' },
  { name: 'Vehículos', to: '/fleet' },
  { name: 'Reservar', to: '/booking' },
  { name: 'Ofertas', to: '/fleet' },
  { name: 'Contacto', to: '/contact' }
]

function Navbar({ companyName = 'FRAY RENT CAR' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#050505]/95 backdrop-blur-md border-b border-[#c9a227]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          
          {/* Logo + Nombre - SELLO PREMIUM INTEGRADO */}
          <Link to="/" className="flex items-center gap-2.5 group">
            {/* Logo Seal - Premium Badge */}
            <div className="relative flex-shrink-0">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#c9a227]/40 to-[#c9a227]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Main seal container */}
              <div className="relative w-16 h-16 rounded-full border-2 border-[#c9a227]/80 bg-[#000000] flex items-center justify-center overflow-hidden shadow-lg shadow-[#c9a227]/40 group-hover:shadow-[#c9a227]/60 group-hover:border-[#e5c158] transition-all duration-300">
                
                {/* Image seal - fills completely with radial mask */}
                <img
                  src="/images/logo/logo.png"
                  alt="FRAY RENT CAR"
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: 'circle(50%)',
                    filter: 'brightness(1.05) contrast(1.2) saturate(1.1)',
                    objectPosition: 'center'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                
                {/* Premium gradient overlay - subtle shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a227]/8 via-transparent to-[#000000]/20 pointer-events-none" />
                
                {/* Fallback badge */}
                <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a227] flex items-center justify-center text-black font-black text-lg leading-none">
                  FR
                </div>
              </div>
            </div>
            
            {/* Branding Text - Unified with Logo */}
            <div className="hidden sm:flex flex-col justify-center -space-y-0.5">
              <span className="text-white font-black text-xl tracking-[0.08em] leading-tight">
                FRAY
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-[#c9a227] font-black text-[10px] tracking-[0.15em] uppercase leading-none">
                  RENT
                </span>
                <span className="text-[#c9a227]/70 font-bold text-[10px] tracking-[0.15em] uppercase leading-none">
                  CAR
                </span>
              </div>
            </div>
          </Link>

          {/* Menú centrado */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-[13px] font-medium tracking-wider uppercase transition-all ${
                    isActive 
                      ? 'text-[#c9a227]' 
                      : 'text-gray-300 hover:text-[#c9a227]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Teléfono */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4 text-[#c9a227]" />
              <span className="text-sm">+34 900 123 456</span>
            </div>
            <Link 
              to="/booking" 
              className="bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-black px-6 py-2.5 text-[13px] font-black tracking-widest hover:from-[#d4af37] hover:to-[#c9a227] transition-all shadow-lg shadow-[#c9a227]/40 hover:shadow-[#c9a227]/60 rounded-lg uppercase"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#c9a227] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Línea dorada fina inferior */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-t border-[#c9a227]/20">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-[#c9a227] transition-colors py-3 text-sm uppercase tracking-wide"
              >
                {item.name}
              </NavLink>
            ))}
            <Link 
              to="/booking" 
              className="block bg-[#c9a227] text-black text-center py-3 font-bold mt-4 text-sm uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

