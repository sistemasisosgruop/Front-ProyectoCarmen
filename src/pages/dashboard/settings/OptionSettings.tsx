import AdminLayout from '../../../components/layouts/AdminLayout'
import Options from '../../../components/Options'
import { HiUsers } from 'react-icons/hi'
import { RiCouponFill } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'
import { MdComment, MdMessage } from 'react-icons/md'

const Settings = (): JSX.Element => {
  return (
    <AdminLayout title='Configuraciones'>
      <div className='w-full h-full flex justify-center items-center h-options-settings'>
        <Options
          options={[
            { label: 'Roles', path: '/admin/configuracion/roles', icon: <HiUsers size={80} /> },
            { label: 'Cupones', path: '/admin/configuracion/cupones', icon: <RiCouponFill size={80} /> },
            { label: 'Comprobantes', path: '/admin/configuracion/comprobantes', icon: <IoIosPaper size={80} /> },
            { label: 'Mensajes', path: '/admin/configuracion/mensajes', icon: <MdMessage size={80} /> },
            { label: 'Comentarios', path: '/admin/configuracion/comentarios', icon: <MdComment size={80} /> }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default Settings
