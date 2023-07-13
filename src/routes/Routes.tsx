import { Routes, Route } from 'react-router-dom'
// import ProtectedRoute from './ProtectedRoute'

import Home from '@web/home/Home'
import DepartmentsPage from '@web/departments/DepartmentsPage'
import DepartmentDetails from '@web/department-details/DepartmentDetails'
import DepartmentsCatalog from '@web/departments-catalog/DepartmentsCatalog'
import ToursPage from '@web/tours/ToursPage'
import Flights from '@web/flights/Flights'
import AboutUs from '@web/AboutUs'
import Contact from '@web/Contact'
import DestinationsCatalog from '@web/destination/DestinationsCatalog'
import DestinationDetail from '@web/destination/DestinationDetail'
import MyPurchases from '@web/MyPurchases'
import Cart from '@web/cart/Cart'
import CartInformation from '@web/cart-information/CartInformation'
import Login from '@auth/Login'
import Register from '@auth/Register'
import RecoverPassword from '@auth/RecoverPassword'
import NewPassword from '@auth/NewPassword'
import PageNotFound from '@web/PageNotFound'

import AdminCalendar from '@dashboard/calendar/AdminCalendar'
import AdminFlights from '@dashboard/flights/AdminFlights'
import Departments from '@dashboard/departments/Departments'
import DepartmentReservation from '@dashboard/department-reservation/DepartmentReservation'
import DepartmentOption from '@dashboard/departments-option/DepartmentsOption'
import TourOptions from '@dashboard/tour-options/TourOptions'
import Tours from '@dashboard/tours/Tours'
import TourReservations from '@dashboard/tour-reservations/TourReservations'
import Users from '@dashboard/users/Users'
import Statistics from '@dashboard/statistics/Statistics'
import OptionSettings from '@dashboard/settings/OptionSettings'
import Roles from '@dashboard/roles/Roles'
import Coupons from '@dashboard/coupons/Coupons'
import Receipts from '@dashboard/receipts/Receipts'
import Messages from '@dashboard/messages/Messages'
import Comments from '@dashboard/comments/Comments'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-account" element={<RecoverPassword />} />
      <Route path="/recover-account/new-password/:token" element={<NewPassword />} />

      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/department/:slug/:id" element={<DepartmentDetails />} />
      <Route path="/catalogo-habitaciones" element={<DepartmentsCatalog />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/flight" element={<Flights />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/destinos-populares" element={<DestinationsCatalog />} />
      <Route path="/destinos-populares/detalle" element={<DestinationDetail />} />
      <Route path="/mis-compras" element={<MyPurchases />} />

      <Route path="*" element={<PageNotFound />} />

      <Route path="/admin/calendar" element={<AdminCalendar />} />
      <Route path="/admin/flights" element={<AdminFlights />} />
      <Route path="/admin/options/departments" element={<DepartmentOption />} />
      <Route path="/admin/departments" element={<Departments />} />
      <Route path="/admin/departments/bookings" element={<DepartmentReservation />} />
      <Route path="/admin/options/tours" element={<TourOptions />} />
      <Route path="/admin/tours" element={<Tours />} />
      <Route path="/admin/tours/bookings" element={<TourReservations />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/statistics" element={<Statistics />} />
      <Route path="/admin/settings" element={<OptionSettings />} />
      <Route path="/admin/settings/roles" element={<Roles />} />
      <Route path="/admin/settings/cuopons" element={<Coupons />} />
      <Route path="/admin/settings/receipts" element={<Receipts />} />
      <Route path="/admin/settings/messages" element={<Messages />} />
      <Route path="/admin/settings/comments" element={<Comments />} />

      <Route path="/carrito-de-compras" element={<Cart />} />
      <Route path="/carrito-de-compras/confirmar-datos" element={<CartInformation />} />

      {/*
      */}

      {/* <Route element={<ProtectedRoute />}>

      </Route> */}
    </Routes>
  )
}

export default Routing
