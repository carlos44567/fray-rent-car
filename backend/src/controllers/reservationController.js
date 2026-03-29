const { Reservation, Client, Vehicle } = require('../models')

// Matriz de permisos: transiciones permitidas por rol
const rolePermissions = {
  owner: {
    pending: ['confirmed', 'cancelled'],
    confirmed: ['cancelled', 'finished'],
    cancelled: [],
    finished: []
  },
  worker: {
    pending: ['confirmed'],
    confirmed: ['finished'],
    cancelled: [],
    finished: []
  }
}

// Validar si la transición es permitida
const canTransition = (role, currentStatus, newStatus) => {
  const allowed = rolePermissions[role] || rolePermissions.worker
  return allowed[currentStatus]?.includes(newStatus) || false
}

const listReservations = async (_req, res) => {
  try {
    const reservations = await Reservation.findAll({
      include: [
        { model: Client, as: 'client', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Vehicle, as: 'vehicle', attributes: ['id', 'brand', 'model', 'price_per_day'] }
      ],
      order: [['id', 'DESC']]
    })
    return res.json(reservations)
  } catch (error) {
    return res.status(500).json({ message: 'Error al listar reservas', error: error.message })
  }
}

const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id, {
      include: [
        { model: Client, as: 'client', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Vehicle, as: 'vehicle', attributes: ['id', 'brand', 'model', 'price_per_day'] }
      ]
    })

    if (!reservation) {
      return res.status(404).json({ message: 'Reserva no encontrada' })
    }

    return res.json(reservation)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener reserva', error: error.message })
  }
}

const createReservation = async (req, res) => {
  try {
    const { client_id, vehicle_id, start_date, end_date, total_price } = req.body

    if (!client_id || !vehicle_id || !start_date || !end_date || !total_price) {
      return res.status(400).json({
        message: 'client_id, vehicle_id, start_date, end_date y total_price son obligatorios'
      })
    }

    const client = await Client.findByPk(client_id)
    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' })
    }

    const vehicle = await Vehicle.findByPk(vehicle_id)
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehículo no encontrado' })
    }

    const reservation = await Reservation.create({
      client_id,
      vehicle_id,
      start_date,
      end_date,
      total_price,
      status: 'pending'
    })

    return res.status(201).json(reservation)
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear reserva', error: error.message })
  }
}

const updateReservationStatus = async (req, res) => {
  try {
    const { status } = req.body
    const allowed = ['pending', 'confirmed', 'cancelled', 'finished']
    const userRole = req.user?.role || 'worker'

    if (!status || !allowed.includes(status)) {
      return res.status(400).json({ message: 'Estado inválido' })
    }

    const reservation = await Reservation.findByPk(req.params.id)
    if (!reservation) {
      return res.status(404).json({ message: 'Reserva no encontrada' })
    }

    // Validar transición según rol
    if (!canTransition(userRole, reservation.status, status)) {
      return res.status(403).json({
        message: `No tienes permiso para cambiar de "${reservation.status}" a "${status}" con rol "${userRole}"`
      })
    }

    await reservation.update({ status })
    return res.json(reservation)
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar estado', error: error.message })
  }
}

module.exports = {
  listReservations,
  getReservationById,
  createReservation,
  updateReservationStatus
}
