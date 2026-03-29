const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models')

const authRoutes = require('./routes/auth')
const vehicleRoutes = require('./routes/vehicles')
const clientRoutes = require('./routes/clients')
const reservationRoutes = require('./routes/reservations')
const websiteContentRoutes = require('./routes/websiteContent')
const uploadRoutes = require('./routes/upload')
const userRoutes = require('./routes/users')
const dashboardRoutes = require('./routes/dashboard')

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*'
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Servir archivos estáticos subidos
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Health check
app.get('/api/health', async (_req, res) => {
  try {
    await sequelize.authenticate()
    return res.json({ message: 'API OK', database: 'connected' })
  } catch (error) {
    return res.status(500).json({ message: 'API OK', database: 'disconnected', error: error.message })
  }
})

// Root API endpoint
app.get('/api', (_req, res) => {
  return res.json({ 
    message: 'FRAY RENT CAR API',
    version: '1.0.0',
    status: 'active',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      vehicles: '/api/vehicles',
      clients: '/api/clients',
      reservations: '/api/reservations',
      websiteContent: '/api/website-content',
      upload: '/api/upload',
      users: '/api/users',
      dashboard: '/api/dashboard'
    }
  })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/vehicles', vehicleRoutes)
app.use('/api/clients', clientRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/website-content', websiteContentRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/users', userRoutes)
app.use('/api/dashboard', dashboardRoutes)

// Debug: listar rutas registradas
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log('ROUTE:', middleware.route.path)
  } else if (middleware.name === 'router') {
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        console.log('ROUTER:', handler.route.path)
      }
    })
  }
})

// 404 handler
app.use((req, res) => {
  console.log('404:', req.method, req.url)
  res.status(404).json({ message: 'Ruta no encontrada', method: req.method, url: req.url })
})

const PORT = process.env.PORT || 5001

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
    console.log('Conexión MySQL establecida correctamente')
  } catch (error) {
    console.error('No se pudo conectar a MySQL:', error.message)
  }
})
