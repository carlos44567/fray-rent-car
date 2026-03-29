import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Fleet from '../pages/Fleet'
import Booking from '../pages/Booking'
import Contact from '../pages/Contact'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
