import { useAuth } from '../../context/AuthContext'

function Topbar() {
  const { user, logout } = useAuth()

  return (
    <header className="flex items-center justify-between border-b border-luxuryGold/20 bg-luxuryPanel px-4 py-3 md:px-6">
      <div>
        <h1 className="text-lg font-semibold text-luxuryText md:text-xl">Panel Interno</h1>
        <p className="text-xs text-luxuryMuted">Gestión operativa de FRAY RENT CAR</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-luxuryText">{user?.name}</p>
          <p className="text-xs uppercase text-luxuryGold">{user?.role}</p>
        </div>
        <button className="ghost-btn text-xs md:text-sm" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Topbar
