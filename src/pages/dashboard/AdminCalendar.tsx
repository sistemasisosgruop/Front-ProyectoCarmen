import Calendar from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import datGridPlugin from '@fullcalendar/daygrid'
import AdminLayout from '../../components/layouts/AdminLayout'

const AdminCalendar = (): JSX.Element => {
  return (
    <AdminLayout title='Mi calendario'>
      <h1>
        Calendar
      </h1>
    </AdminLayout>
  )
}

export default AdminCalendar
