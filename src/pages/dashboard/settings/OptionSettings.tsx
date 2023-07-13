import AdminLayout from '@layouts/AdminLayout'
import Options from '@components/Options'
import { HiUsers } from 'react-icons/hi'
import { RiCouponFill } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'
import { MdComment, MdMessage } from 'react-icons/md'

function Settings() {
  return (
    <AdminLayout title="Configuraciones">
      <div className="w-full h-full flex justify-center items-center h-options-settings">
        <Options
          options={[
            {
              label: 'Roles',
              path: '/admin/settings/roles',
              icon: HiUsers
            },
            {
              label: 'Cupones',
              path: '/admin/settings/coupons',
              icon: RiCouponFill
            },
            {
              label: 'Comprobantes',
              path: '/admin/settings/receipts',
              icon: IoIosPaper
            },
            {
              label: 'Mensajes',
              path: '/admin/settings/messages',
              icon: MdMessage
            },
            {
              label: 'Comentarios',
              path: '/admin/settings/comments',
              icon: MdComment
            }
          ]}
        />
      </div>
    </AdminLayout>
  )
}

export default Settings
