import AdminLayout from '@layouts/AdminLayout'
import Options from '@components/Options'
import { FaBed } from 'react-icons/fa'
import { IoMdBed } from 'react-icons/io'

function SelectOptionDepartments() {
  return (
    <AdminLayout title="Selecciona la opcion de departamentos">
      <div className="w-full h-full flex justify-center items-center">
        <Options
          options={[
            {
              label: 'Departamentos',
              path: '/admin/departamentos/registro',
              icon: <IoMdBed size={80} />
            },
            {
              label: 'Reservas',
              path: '/admin/departamentos/reservas',
              icon: <FaBed size={80} />
            }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default SelectOptionDepartments
