import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import VehicleCard from '../components/VehicleCard'
import TrustServices from '../components/TrustServices'
import Footer from '../components/Footer'
import { getFeaturedVehicles } from '../services/api'
import { getWebsiteSection } from '../services/websiteContent'

function Home() {
  const [fleetVehicles, setFleetVehicles] = useState([])
  const [footerData, setFooterData] = useState({
    phone: '+34 900 123 456',
    email: 'info@frayrentcar.com',
    address: 'Madrid, España',
    copyright: '© 2025 FRAY RENT CAR. Todos los derechos reservados.'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        
        // Cargar vehículos destacados
        try {
          const vehiclesRes = await getFeaturedVehicles()
          if (vehiclesRes.data && vehiclesRes.data.length > 0) {
            const formatted = vehiclesRes.data.map(v => ({
              id: v.id,
              name: `${v.brand} ${v.model}`,
              price_per_day: v.price_per_day,
              image: v.image_url
            }))
            setFleetVehicles(formatted)
          }
        } catch (err) {
          console.log('Featured vehicles load skipped')
        }
        
        // Cargar datos del footer desde la sección 'footer'
        try {
          const footerRes = await getWebsiteSection('footer')
          if (footerRes.data) {
            setFooterData(prev => ({
              phone: footerRes.data.phone?.value || prev.phone,
              email: footerRes.data.email?.value || prev.email,
              address: footerRes.data.address?.value || prev.address,
              copyright: footerRes.data.copyright?.value || prev.copyright
            }))
          }
        } catch (err) {
          console.log('Footer data load skipped - using defaults')
        }
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a227]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <BookingForm />
      
      {/* NUESTRA FLOTA */}
      <section className="py-24 border-t border-[#c9a227]/15 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-20">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.35em] text-[#c9a227] mb-6">
              Nuestra Flota
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227] to-transparent mx-auto" />
          </div>
          
          {/* Grid de vehículos */}
          <div className="grid md:grid-cols-3 gap-8">
            {fleetVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <TrustServices />
      <Footer 
        phone={footerData.phone}
        email={footerData.email}
        address={footerData.address}
        copyright={footerData.copyright}
      />
    </div>
  )
}

export default Home

