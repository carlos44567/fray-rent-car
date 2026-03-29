import { Shield, Plane } from 'lucide-react'

function TrustServices({ 
  title = 'SERVICIO DE CONFIANZA',
  item1Title = 'Seguro Incluido',
  item1Description = 'Cobertura completa en todos nuestros vehículos',
  item2Title = 'Entrega en Aeropuerto',
  item2Description = 'Entrega y recogida en principales aeropuertos'
}) {
  return (
    <section className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] py-16 border-t border-[#c9a227]/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Servicios en grid compacto - mejor alineación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* SERVICIO 1 */}
          <div className="flex gap-5 p-6 rounded-xl bg-[#0f0f0f]/80 border border-[#c9a227]/15 hover:border-[#c9a227]/40 hover:bg-[#0f0f0f] transition-all group">
            {/* Icono */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 flex items-center justify-center group-hover:border-[#c9a227]/60 group-hover:bg-gradient-to-br group-hover:from-[#c9a227]/30 group-hover:to-[#c9a227]/10 transition-all shadow-lg shadow-[#c9a227]/10">
                <Shield className="w-8 h-8 text-[#c9a227]" />
              </div>
            </div>
            
            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-white mb-2">{item1Title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item1Description}</p>
            </div>
          </div>

          {/* SERVICIO 2 */}
          <div className="flex gap-5 p-6 rounded-xl bg-[#0f0f0f]/80 border border-[#c9a227]/15 hover:border-[#c9a227]/40 hover:bg-[#0f0f0f] transition-all group">
            {/* Icono */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 flex items-center justify-center group-hover:border-[#c9a227]/60 group-hover:bg-gradient-to-br group-hover:from-[#c9a227]/30 group-hover:to-[#c9a227]/10 transition-all shadow-lg shadow-[#c9a227]/10">
                <Plane className="w-8 h-8 text-[#c9a227]" />
              </div>
            </div>
            
            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-white mb-2">{item2Title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item2Description}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default TrustServices

