import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Vehicles API - solo vehículos activos
export const getVehicles = () => api.get('/vehicles/active')
export const getVehicleById = (id) => api.get(`/vehicles/${id}`)
export const getFeaturedVehicles = () => api.get('/vehicles/featured')

// Clients API
export const createClient = (data) => api.post('/clients', data)

// Reservations API
export const createReservation = (data) => api.post('/reservations', data)

export default api
