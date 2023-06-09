import AdminLayout from '@layouts/AdminLayout'
import Options from '@components/Options'
import { FaBed } from 'react-icons/fa'
import { IoMdBed } from 'react-icons/io'

const Beds = () => {
  return (
    <AdminLayout title="Selecciona la opcion de camas">
      <div className="w-full h-full flex justify-center items-center">
        <Options
          options={[
            {
              label: 'Camas',
              path: '/admin/camas/registro',
              icon: <IoMdBed size={80} />
            },
            {
              label: 'Reservas',
              path: '/admin/camas/reservas',
              icon: <FaBed size={80} />
            }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default Beds
