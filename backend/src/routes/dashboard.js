const express = require('express')
const router = express.Router()
const { 
  getDashboardMetrics,
  getReservationsReport,
  getClientsReport,
  getVehiclesReport
} = require('../controllers/dashboardController')

// Middleware
const { authenticate } = require('../middleware/auth')

// Rutas - requieren autenticación
router.use(authenticate)

// Métricas del dashboard
router.get('/metrics', getDashboardMetrics)

// Reportes
router.get('/reports/reservations', getReservationsReport)
router.get('/reports/clients', getClientsReport)
router.get('/reports/vehicles', getVehiclesReport)

module.exports = router
