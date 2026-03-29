import { NavLink } from 'react-router-dom'
import { FiGrid, FiCalendar, FiUsers, FiTruck, FiSettings, FiGlobe, FiUser, FiFileText } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

function Sidebar() {
  const { user } = useAuth()
  const isOwner = user?.role === 'owner'

  const items = [
    { to: '/dashboard', label: 'Dashboard', icon: FiGrid },
    { to: '/reservations', label: 'Reservations', icon: FiCalendar },
    { to: '/clients', label: 'Clients', icon: FiUsers },
    { to: '/vehicles', label: 'Vehicles', icon: FiTruck },
    ...(isOwner ? [{ to: '/users', label: 'Users', icon: FiUser }] : []),
    { to: '/website-content', label: 'Website Content', icon: FiGlobe },
    { to: '/reports', label: 'Reports', icon: FiFileText },
    { to: '/settings', label: 'Settings', icon: FiSettings }
  ]

  return (
    <aside className="hidden w-64 flex-col border-r border-luxuryGold/20 bg-luxuryPanel p-4 lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gold-gradient shadow-gold" />
        <div>
          <p className="text-xs uppercase tracking-wider text-luxuryGold">Admin</p>
          <p className="text-sm font-semibold text-luxuryText">FRAY RENT CAR</p>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-luxuryGold/15 text-luxuryGold'
                  : 'text-luxuryText hover:bg-luxuryGold/10 hover:text-luxuryGold'
              }`
            }
          >
            <Icon size={16} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
