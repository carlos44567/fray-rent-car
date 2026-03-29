import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { login, isAuthenticated, error, clearError } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: 'owner@frayrentcar.com',
    password: 'admin123'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  // Limpiar errores al montar
  useEffect(() => {
    clearError()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) clearError()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    const ok = await login(form)
    if (ok) {
      navigate('/dashboard')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-luxuryBlack px-4">
      <div className="panel-card w-full max-w-md p-8">
        <p className="text-xs uppercase tracking-widest text-luxuryGold">Panel Interno</p>
        <h1 className="mt-2 text-3xl font-bold text-luxuryText">Iniciar sesión</h1>
        <p className="mt-2 text-sm text-luxuryMuted">Accede con tu cuenta de owner o worker.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-luxuryMuted">Email</label>
            <input
              name="email"
              type="email"
              className="input-luxury"
              placeholder="owner@frayrentcar.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-luxuryMuted">Contraseña</label>
            <input
              name="password"
              type="password"
              className="input-luxury"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {error ? (
            <div className="rounded-lg border border-luxuryDanger/30 bg-luxuryDanger/10 p-3">
              <p className="text-sm text-luxuryDanger">{error}</p>
            </div>
          ) : null}

          <button 
            type="submit" 
            className="gold-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar al panel'}
          </button>
        </form>

        <div className="mt-6 border-t border-luxuryGold/10 pt-4">
          <p className="text-xs text-luxuryMuted">Credenciales de prueba:</p>
          <p className="mt-1 text-xs text-luxuryMuted">
            <span className="text-luxuryGold">Owner:</span> owner@frayrentcar.com / owner123
          </p>
          <p className="text-xs text-luxuryMuted">
            <span className="text-luxuryGold">Worker:</span> worker@frayrentcar.com / worker123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
