import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import localeEs from '@fullcalendar/core/locales/es'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'

const AdminCalendar = () => {
  return (
    <AdminLayout title="Mi calendario">
      <Heading title="Mi calendario" />

      <div className="w-full">
        <AdminSection>
          <FullCalendar
            plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            locale={localeEs}
            themeSystem="standart"
            headerToolbar={{
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={[
              { title: 'Cumpleaños', date: '2023-05-08', color: '#fe3131' },
              {
                title: 'Sorpresa a la sopresa',
                date: '2023-05-08',
                color: '#fe3131'
              },
              { title: 'Dia de la madre', date: '2023-05-01' },
              { title: 'Prueba', date: '2023-05-03' },
              { title: 'Dia especial', date: '2023-05-02' }
            ]}
          />
        </AdminSection>
      </div>
    </AdminLayout>
  )
}

export default AdminCalendar
