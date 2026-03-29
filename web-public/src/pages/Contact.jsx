import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getWebsiteSection } from '../services/websiteContent'

function Contact() {
  const [contact, setContact] = useState({
    title: 'Contacto',
    subtitle: 'Nuestro equipo está disponible para resolver dudas, gestionar reservas corporativas y diseñar soluciones premium a tu medida.',
    phone: '+34 600 123 456',
    email: 'reservas@frayrentcar.com',
    address: 'Av. Premium 77, Madrid',
    hours: 'Lun - Dom · 08:00 - 22:00',
    footer_phone: '+34 900 123 456',
    footer_email: 'info@frayrentcar.com',
    footer_address: 'Madrid, España'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadContactData()
  }, [])

  const loadContactData = async () => {
    try {
      const response = await getWebsiteSection('contact')
      if (response.data) {
        setContact(prev => ({
          ...prev,
          title: response.data.title?.value || prev.title,
          subtitle: response.data.subtitle?.value || prev.subtitle,
          phone: response.data.phone?.value || prev.phone,
          email: response.data.email?.value || prev.email,
          address: response.data.address?.value || prev.address,
          hours: response.data.hours?.value || prev.hours
        }))
      }
    } catch (error) {
      console.log('Contact data using defaults - API may not have section yet')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-luxuryBlack">
      <Navbar />

      {/* Header Premium */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#060606] to-luxuryBlack" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)]" />
        
        <div className="relative section-wrap">
          {/* Título estilo Home */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-luxuryGold/50" />
              <span className="text-luxuryGold text-xs uppercase tracking-[0.3em] font-medium">Atención Personalizada</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-luxuryGold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-luxuryText">
              <span className="font-bold text-luxuryGold">{contact.title}</span>
            </h1>
            <p className="text-luxuryMuted text-sm mt-4 max-w-xl mx-auto">
              {contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-wrap pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Info de contacto */}
          <div className="rounded-xl border border-luxuryGold/20 bg-[#0a0a0a] p-8">
            <h2 className="text-2xl font-semibold text-luxuryText mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border border-luxuryGold/10 hover:border-luxuryGold/25 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxuryGold/10 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-luxuryGold" />
                </div>
                <div>
                  <p className="text-xs text-luxuryMuted uppercase tracking-wider mb-1">Teléfono</p>
                  <p className="text-luxuryText font-medium">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border border-luxuryGold/10 hover:border-luxuryGold/25 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxuryGold/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-luxuryGold" />
                </div>
                <div>
                  <p className="text-xs text-luxuryMuted uppercase tracking-wider mb-1">Email</p>
                  <p className="text-luxuryText font-medium">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border border-luxuryGold/10 hover:border-luxuryGold/25 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxuryGold/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-luxuryGold" />
                </div>
                <div>
                  <p className="text-xs text-luxuryMuted uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-luxuryText font-medium">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/40 border border-luxuryGold/10 hover:border-luxuryGold/25 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxuryGold/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-luxuryGold" />
                </div>
                <div>
                  <p className="text-xs text-luxuryMuted uppercase tracking-wider mb-1">Horario</p>
                  <p className="text-luxuryText font-medium">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-xl border border-luxuryGold/20 bg-[#0a0a0a] p-8">
            <h2 className="text-2xl font-semibold text-luxuryText mb-6">Envíanos un mensaje</h2>
            
            <form className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-luxuryMuted mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  placeholder="Ej: Juan García" 
                  className="input-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-luxuryMuted mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="Ej: juan@email.com" 
                  className="input-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-luxuryMuted mb-2">Asunto</label>
                <input 
                  type="text" 
                  placeholder="Ej: Consulta sobre reserva" 
                  className="input-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-luxuryMuted mb-2">Mensaje</label>
                <textarea 
                  rows="5" 
                  placeholder="Escribe tu mensaje aquí..." 
                  className="input-luxury resize-none"
                />
              </div>
              
              <button 
                type="button" 
                className="btn-gold w-full justify-center"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
