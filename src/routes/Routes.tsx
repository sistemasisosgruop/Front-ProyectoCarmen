import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import Home from '@web/home/Home'
import LazyRooms from '@web/rooms/Rooms'
import DepartmentDetails from '@web/department-details/DepartmentDetails'
import RoomCatalog from '@web/rooms/RoomCatalog'
import Packages from '@web/Packages'
import Flights from '@web/Flights'
import AboutUs from '@web/AboutUs'
import Contact from '@web/Contact'
import DestinationsCatalog from '@web/destination/DestinationsCatalog'
import DestinationDetail from '@web/destination/DestinationDetail'
import MyPurchases from '@web/MyPurchases'
import ShoppingCart from '@web/shopping-cart/ShoppingCart'
import TravelerInformation from '@web/shopping-cart/TravelerInformation'
import Login from '@auth/Login'
import Register from '@auth/Register'
import RecoverPassword from '@auth/RecoverPassword'
import NewPassword from '@auth/NewPassword'
import PageNotFound from '@web/PageNotFound'

import AdminCalendar from '@dashboard/AdminCalendar'
import AdminFlights from '@dashboard/AdminFlights'
import SelectOptionDepartments from '@dashboard/departments/SelectOptionDepartments'
import DepartmentReservation from '@dashboard/departments/DepartmentReservation'
import DepartmentRegistration from '@dashboard/departments/DepartmentRegistration'
import TourOptions from '@dashboard/tours/TourOptions'
import TourRegistration from '@dashboard/tours/TourRegistration'
import TourReservation from '@dashboard/tours/TourReservation'
import Users from '@dashboard/Users'
import Statistics from '@dashboard/Statistics'
import OptionSettings from '@dashboard/settings/OptionSettings'
import Roles from '@dashboard/settings/Roles'
import Coupons from '@dashboard/settings/Coupons'
import Receipts from '@dashboard/settings/Receipts'
import Messages from '@dashboard/settings/Messages'
import Comments from '@dashboard/settings/Comments'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/habitaciones" element={<LazyRooms />} />
      <Route path="/departamento/:slug/:id" element={<DepartmentDetails />} />
      <Route path="/catalogo-habitaciones" element={<RoomCatalog />} />
      <Route path="/paquetes" element={<Packages />} />
      <Route path="/vuelos" element={<Flights />} />
      <Route path="/contactanos" element={<Contact />} />
      <Route path="/sobre-nosotros" element={<AboutUs />} />
      <Route path="/destinos-populares" element={<DestinationsCatalog />} />
      <Route path="/destinos-populares/detalle" element={<DestinationDetail />} />
      <Route path="/mis-compras" element={<MyPurchases />} />
      <Route path="/iniciar-sesion" element={<Login />} />
      <Route path="/registrate" element={<Register />} />
      <Route path="/recuperacion" element={<RecoverPassword />} />
      <Route path="/recuperacion/nueva-contrasena/:token" element={<NewPassword />} />
      <Route path="*" element={<PageNotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin/calendario" element={<AdminCalendar />} />
        <Route path="/admin/vuelos" element={<AdminFlights />} />
        <Route path="/admin/departamentos" element={<SelectOptionDepartments />} />
        <Route path="/admin/departamentos/registro" element={<DepartmentRegistration />} />
        <Route path="/admin/departamentos/reservas" element={<DepartmentReservation />} />
        <Route path="/admin/paquetes-turisticos" element={<TourOptions />} />
        <Route path="/admin/paquetes-turisticos/registro" element={<TourRegistration />} />
        <Route path="/admin/paquetes-turisticos/reservas" element={<TourReservation />} />
        <Route path="/admin/usuarios" element={<Users />} />
        <Route path="/admin/estadisticas" element={<Statistics />} />
        <Route path="/admin/configuracion" element={<OptionSettings />} />
        <Route path="/admin/configuracion/roles" element={<Roles />} />
        <Route path="/admin/configuracion/cupones" element={<Coupons />} />
        <Route path="/admin/configuracion/comprobantes" element={<Receipts />} />
        <Route path="/admin/configuracion/mensajes" element={<Messages />} />
        <Route path="/admin/configuracion/comentarios" element={<Comments />} />

        <Route path="/carrito-de-compras" element={<ShoppingCart />} />
        <Route path="/carrito-de-compras/confirmar-datos" element={<TravelerInformation />} />
      </Route>
    </Routes>
  )
}

export default Routing
