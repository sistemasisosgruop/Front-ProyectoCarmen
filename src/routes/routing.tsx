import { Routes, Route } from 'react-router-dom'
import Home from '../pages/web/home'
import Rooms from '../pages/web/rooms'
import RoomCatalog from '../pages/web/room-catalog'
import Packages from '../pages/web/packages'
import Flights from '../pages/web/flights'
import Contact from '../pages/web/contact'
import AboutUs from '../pages/web/about-us'
import DestinationsCatalog from '../pages/web/destination/destinations-catalog'
import DestinationDetail from '../pages/web/destination/destination-detail'
import PageNotFound from '../pages/web/page-not-found'

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
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing
