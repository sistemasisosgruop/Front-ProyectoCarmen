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
              path: '/admin/departamentos',
              icon: IoMdBed
            },
            {
              label: 'Reservas',
              path: '/admin/departamentos/reservas',
              icon: FaBed
            }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default SelectOptionDepartments
