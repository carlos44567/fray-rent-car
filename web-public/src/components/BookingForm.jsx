import { Calendar, MapPin, Car, Shield, Clock, Zap, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function BookingForm() {
  const [formData, setFormData] = useState({
    pickup_date: '',
    return_date: '',
    pickup_location: '',
    drop_location: '',
    category: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reserva:', formData)
  }

  return (
    <>
      <section className="-mt-12 relative z-50">
        {/* Separator line */}
        <div className="h-[1px] bg-gradient-to-r from-[#c9a227]/0 via-[#c9a227]/40 to-[#c9a227]/0" />
        
        {/* Form Container - MEJORADO */}
        <div className="bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#050505] border-y border-[#c9a227]/30 shadow-2xl shadow-[#c9a227]/15 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-10">
            
            {/* Heading */}
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">Encuentra tu vehículo perfecto</h3>
              <p className="text-gray-400 text-sm font-light">Selecciona fechas, ubicación y categoría</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 items-end mb-8">
              
              {/* Fecha recogida */}
              <div className="md:col-span-1 lg:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-[#c9a227] mb-3 font-bold">
                  Recogida
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60" />
                  <input
                    type="date"
                    name="pickup_date"
                    value={formData.pickup_date}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-2 border-[#c9a227]/30 hover:border-[#c9a227]/60 pl-10 pr-3 py-3 rounded-lg text-sm text-white font-medium focus:border-[#c9a227] focus:outline-none focus:bg-[#222] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Fecha devolución */}
              <div className="md:col-span-1 lg:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-[#c9a227] mb-3 font-bold">
                  Devolución
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60" />
                  <input
                    type="date"
                    name="return_date"
                    value={formData.return_date}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-2 border-[#c9a227]/30 hover:border-[#c9a227]/60 pl-10 pr-3 py-3 rounded-lg text-sm text-white font-medium focus:border-[#c9a227] focus:outline-none focus:bg-[#222] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Lugar recogida */}
              <div className="md:col-span-1 lg:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-[#c9a227] mb-3 font-bold">
                  Recoger en
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60" />
                  <select
                    name="pickup_location"
                    value={formData.pickup_location}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-2 border-[#c9a227]/30 hover:border-[#c9a227]/60 pl-10 pr-3 py-3 rounded-lg text-sm text-white font-medium appearance-none focus:border-[#c9a227] focus:outline-none focus:bg-[#222] transition-colors cursor-pointer"
                    required
                  >
                    <option value="">Ubicación</option>
                    <option value="Madrid Centro">Madrid Centro</option>
                    <option value="Aeropuerto MAD">Aeropuerto MAD</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60 pointer-events-none" />
                </div>
              </div>

              {/* Categoría */}
              <div className="md:col-span-1 lg:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-[#c9a227] mb-3 font-bold">
                  Categoría
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60" />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-2 border-[#c9a227]/30 hover:border-[#c9a227]/60 pl-10 pr-3 py-3 rounded-lg text-sm text-white font-medium appearance-none focus:border-[#c9a227] focus:outline-none focus:bg-[#222] transition-colors cursor-pointer"
                    required
                  >
                    <option value="">Categoría</option>
                    <option value="economico">Económico</option>
                    <option value="ejecutivo">Ejecutivo</option>
                    <option value="lujo">Lujo</option>
                    <option value="deportivo">Deportivo</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a227]/60 pointer-events-none" />
                </div>
              </div>

              {/* Botón RESERVAR - Destacado */}
              <div className="md:col-span-1 lg:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-black px-6 py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:from-[#d4af37] hover:to-[#c9a227] shadow-lg shadow-[#c9a227]/50 hover:shadow-[#c9a227]/80 transition-all hover:scale-105 h-[47px] transform"
                >
                  Reservar
                </button>
              </div>
            </form>

            {/* Resumen DESTACADO en derecha */}
            <div className="flex justify-between items-center pt-6 border-t border-[#c9a227]/20">
              <div>
                <p className="text-gray-500 text-sm font-light">Precio aproximado</p>
              </div>
              <div className="text-right">
                <p className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#e5c158] to-[#c9a227]">
                  Desde 35€
                </p>
                <p className="text-xs text-gray-400 font-light">por día</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[1px] bg-gradient-to-r from-[#c9a227]/0 via-[#c9a227]/30 to-[#c9a227]/0" />
      </section>

      {/* Beneficios debajo - 4 columnas */}
      <section className="bg-[#0a0a0a] px-6 lg:px-8 py-12 border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Seguro incluido', desc: 'Cobertura completa' },
              { icon: Clock, label: 'Cancelación gratis', desc: 'Hasta 48 horas' },
              { icon: MapPin, label: 'Entrega a domicilio', desc: 'Madrid y alrededores' },
              { icon: Zap, label: 'Reserva en 60 seg', desc: 'Proceso ágil y seguro' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/30 flex items-center justify-center hover:bg-[#c9a227]/25 transition-colors">
                    <item.icon size={24} className="text-[#c9a227]" />
                  </div>
                </div>
                <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingForm

