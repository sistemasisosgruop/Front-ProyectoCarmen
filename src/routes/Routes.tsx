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
import PageNotFound from '../pages/web/PageNotFound'
import Main from '../pages/dashboard/Main'

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
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing
