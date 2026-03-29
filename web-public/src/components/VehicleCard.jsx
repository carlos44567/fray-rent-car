import { Link } from 'react-router-dom'
import { getVehicleImageUrl } from '../utils/imageUtils'

function VehicleCard({ vehicle }) {
  const { id, name, price_per_day, image } = vehicle
  const finalImageUrl = getVehicleImageUrl(image, id)

  return (
    <div className="group bg-[#0f0f0f] overflow-hidden border border-[#1a1a1a] hover:border-[#c9a227]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a227]/10 rounded-2xl">
      {/* Imagen con brillo premium */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#080808]">
        {/* Brillo overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        <img 
          src={finalImageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ filter: 'brightness(0.95) contrast(1.05)' }}
          onError={(e) => {
            e.target.src = getVehicleImageUrl('/images/vehicles/car-1.jpg', id)
          }}
        />
        
        {/* Brillo dorado sutil en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#c9a227]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenido */}
      <div className="p-6 relative">
        {/* Línea dorada sutil superior */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Nombre del coche - más prominente */}
        <h3 className="text-xl font-bold text-white tracking-wide mb-2">
          {name}
        </h3>

        {/* Precio - más impactante */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-[#c9a227]">{price_per_day}€</span>
          <span className="text-sm text-gray-500 uppercase tracking-wider">/ día</span>
        </div>

        {/* Botón - más elegante */}
        <Link 
          to={`/booking?vehicle=${id}`}
          className="block w-full py-3.5 bg-[#1a1a1a] text-white text-center text-sm font-semibold border border-[#333] rounded-xl group-hover:bg-[#c9a227] group-hover:text-black group-hover:border-[#c9a227] transition-all duration-300 hover:shadow-md hover:shadow-[#c9a227]/25"
        >
          Reservar Ahora
        </Link>
      </div>
    </div>
  )
}

export default VehicleCard

