import AdminLayout from '@layouts/AdminLayout'
import Options from '@components/Options'
import { FaBed } from 'react-icons/fa'
import { IoMdBed } from 'react-icons/io'

const OptionsTouristPackages = (): JSX.Element => {
  return (
    <AdminLayout title='Paquetes turísticos'>
      <div className='w-full h-full flex justify-center items-center'>
        <Options
          options={[
            { label: 'Paquetes turísticos', path: '/admin/paquetes-turisticos/registro', icon: <IoMdBed size={80} /> },
            { label: 'Reservas', path: '/admin/paquetes-turisticos/reservas', icon: <FaBed size={80} /> }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default OptionsTouristPackages
