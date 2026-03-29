import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VehicleCard from '../components/VehicleCard'
import { getVehicles } from '../services/api'
import { Link } from 'react-router-dom'

function Fleet() {
  const [vehiclesState, setVehiclesState] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadVehicles()
  }, [])

  const loadVehicles = async () => {
    try {
      setLoading(true)
      const response = await getVehicles()
      if (response.data && response.data.length > 0) {
        // Mapear al formato requerido, filtrando solo activos
        const mappedVehicles = response.data
          .filter(v => v.is_active !== false)
          .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
          .map(v => ({
            id: v.id,
            name: `${v.brand} ${v.model}`,
            price_per_day: v.price_per_day,
            image: v.image_url  // URL real desde API
          }))
        setVehiclesState(mappedVehicles)
      }
    } catch (error) {
      console.error('Error loading vehicles:', error)
      setVehiclesState([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-luxuryBlack">
      <Navbar />

      {/* Header Premium */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#060606] to-luxuryBlack" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)]" />
        
        <div className="relative section-wrap">
          {/* Título estilo Home */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-luxuryGold/50" />
              <span className="text-luxuryGold text-xs uppercase tracking-[0.3em] font-medium">Colección Premium</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-luxuryGold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-luxuryText">
              Nuestra <span className="font-bold text-luxuryGold">Flota</span>
            </h1>
            <p className="text-luxuryMuted text-sm mt-4 max-w-xl mx-auto">
              Descubre modelos exclusivos cuidadosamente seleccionados para ofrecer potencia, diseño y una experiencia de conducción superior.
            </p>
          </div>

          {/* Botón CTA */}
          <div className="text-center">
            <Link to="/booking" className="btn-gold inline-flex">
              Reservar un vehículo
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de vehículos */}
      <section className="section-wrap pb-16">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-luxuryGold border-t-transparent"></div>
              <p className="mt-4 text-luxuryMuted">Cargando vehículos...</p>
            </div>
          </div>
        )}

        {!loading && vehiclesState.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {vehiclesState.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}

        {!loading && vehiclesState.length === 0 && (
          <div className="text-center py-12">
            <p className="text-luxuryMuted">No hay vehículos disponibles en este momento.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}

export default Fleet
