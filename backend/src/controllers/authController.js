const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y password son obligatorios' })
    }

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    )

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error: error.message })
  }
}

const profile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'role', 'created_at']
    })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener perfil', error: error.message })
  }
}

module.exports = {
  login,
  profile
}
