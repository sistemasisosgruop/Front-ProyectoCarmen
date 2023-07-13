import AdminLayout from '@layouts/AdminLayout'
import Options from '@components/Options'
import { FaBed } from 'react-icons/fa'
import { IoMdBed } from 'react-icons/io'

function TourOptions() {
  return (
    <AdminLayout title="Paquetes turísticos">
      <div className="w-full h-full flex justify-center items-center">
        <Options
          options={[
            {
              label: 'Paquetes turísticos',
              path: '/admin/tours',
              icon: IoMdBed
            },
            {
              label: 'Reservas',
              path: '/admin/tours/bookings',
              icon: FaBed
            }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default TourOptions
