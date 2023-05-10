import { Routes, Route } from 'react-router-dom'
import Home from '../pages/web/Home'
import Rooms from '../pages/web/Rooms'
import RoomCatalog from '../pages/web/RoomCatalog'
import Packages from '../pages/web/Packages'
import Flights from '../pages/web/Flights'
import Contact from '../pages/web/Contact'
import AboutUs from '../pages/web/AboutUs'
import DestinationsCatalog from '../pages/web/destination/DestinationsCatalog'
import DestinationDetail from '../pages/web/destination/DestinationDetail'
import ShoppingCart from '../pages/web/ShoppingCart'

import Main from '../pages/dashboard/Main'
import AdminCalendar from '../pages/dashboard/AdminCalendar'
import AdminFlights from '../pages/dashboard/AdminFlights'
import SelectOptionBeds from '../pages/dashboard/beds/SelectOptionBeds'
import BedReservation from '../pages/dashboard/beds/BedReservation'
import BedRegistration from '../pages/dashboard/beds/BedRegistration'
import TouristPackages from '../pages/dashboard/TouristPackages'
import Users from '../pages/dashboard/Users'
import Statistics from '../pages/dashboard/Statistics'
import Settings from '../pages/dashboard/Settings'

import PageNotFound from '../pages/web/PageNotFound'

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/habitaciones' element={<Rooms />} />
      <Route path='/catalogo-habitaciones' element={<RoomCatalog />} />
      <Route path='/paquetes' element={<Packages />} />
      <Route path='/vuelos' element={<Flights />} />
      <Route path='/contactanos' element={<Contact />} />
      <Route path='/sobre-nosotros' element={<AboutUs />} />
      <Route path='/destinos-populares' element={<DestinationsCatalog />} />
      <Route path='/destinos-populares/detalle' element={<DestinationDetail />} />
      <Route path='/carrito-de-compras' element={<ShoppingCart />} />
      <Route path='/admin' element={<Main />} />
      <Route path='/admin/calendario' element={<AdminCalendar />} />
      <Route path='/admin/vuelos' element={<AdminFlights />} />
      <Route path='/admin/camas' element={<SelectOptionBeds />} />
      <Route path='/admin/camas/registro' element={<BedRegistration />} />
      <Route path='/admin/camas/reservas' element={<BedReservation />} />
      <Route path='/admin/paquetes-turisticos' element={<TouristPackages />} />
      <Route path='/admin/usuarios' element={<Users />} />
      <Route path='/admin/estadisticas' element={<Statistics />} />
      <Route path='/admin/configuracion' element={<Settings />} />

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing
