import { Routes, Route } from 'react-router-dom'
import Home from '../pages/web/Home'
import Rooms from '../pages/web/Rooms'
import Packages from '../pages/web/Packages'
import Flights from '../pages/web/Flights'
import Contact from '../pages/web/Contact'
import AboutUs from '../pages/web/AboutUs'
import PageNotFound from '../pages/web/PageNotFound'

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/habitaciones' element={<Rooms />} />
      <Route path='/paquetes' element={<Packages />} />
      <Route path='/vuelos' element={<Flights />} />
      <Route path='/contactanos' element={<Contact />} />
      <Route path='/sobre-nosotros' element={<AboutUs />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing

