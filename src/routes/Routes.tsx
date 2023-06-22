import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from '@components/Loading'

const Home = lazy(() => import('@web/Home'))
const LazyRooms = lazy(() => import('@web/rooms/Rooms'))
const RoomsDetail = lazy(() => import('@web/rooms/RoomsDetail'))
const RoomCatalog = lazy(() => import('@web/rooms/RoomCatalog'))
const Packages = lazy(() => import('@web/Packages'))
const Flights = lazy(() => import('@web/Flights'))
const AboutUs = lazy(() => import('@web/AboutUs'))
const Contact = lazy(() => import('@web/Contact'))
const DestinationsCatalog = lazy(() => import('@web/destination/DestinationsCatalog'))
const DestinationDetail = lazy(() => import('@web/destination/DestinationDetail'))
const MyPurchases = lazy(() => import('@web/MyPurchases'))
const ShoppingCart = lazy(() => import('@web/shopping-cart/ShoppingCart'))
const TravelerInformation = lazy(() => import('@web/shopping-cart/TravelerInformation'))
const Login = lazy(() => import('@auth/Login'))
const Register = lazy(() => import('@auth/Register'))
const RecoverPassword = lazy(() => import('@auth/RecoverPassword'))
const NewPassword = lazy(() => import('@auth/NewPassword'))
const PageNotFound = lazy(() => import('@web/PageNotFound'))

const AdminCalendar = lazy(() => import('@dashboard/AdminCalendar'))
const AdminFlights = lazy(() => import('@dashboard/AdminFlights'))
const SelectOptionDepartments = lazy(() => import('@dashboard/departments/SelectOptionDepartments'))
const DepartmentReservation = lazy(() => import('@dashboard/departments/DepartmentReservation'))
const DepartmentRegistration = lazy(() => import('@dashboard/departments/DepartmentRegistration'))
const TourOptions = lazy(() => import('@dashboard/tours/TourOptions'))
const TourRegistration = lazy(() => import('@dashboard/tours/TourRegistration'))
const TourReservation = lazy(() => import('@dashboard/tours/TourReservation'))
const Users = lazy(() => import('@dashboard/Users'))
const Statistics = lazy(() => import('@dashboard/Statistics'))
const OptionSettings = lazy(() => import('@dashboard/settings/OptionSettings'))
const Roles = lazy(() => import('@dashboard/settings/Roles'))
const Coupons = lazy(() => import('@dashboard/settings/Coupons'))
const Receipts = lazy(() => import('@dashboard/settings/Receipts'))
const Messages = lazy(() => import('@dashboard/settings/Messages'))
const Comments = lazy(() => import('@dashboard/settings/Comments'))

const ProtectedRoute = lazy(() => import('./ProtectedRoute'))

function Routing() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<LazyRooms />} />
        <Route path="/habitaciones/detalle" element={<RoomsDetail />} />
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
    </Suspense>
  )
}

export default Routing
