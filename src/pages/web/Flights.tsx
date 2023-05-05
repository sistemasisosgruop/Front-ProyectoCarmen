import ContactForm from '../../components/flights/ContactForm'
import LayoutPage from '../../components/layouts/layout-page'
import Section from '../../components/layouts/section'
import Masthead from '../../components/masthead'
import Tabs from '../../components/flights/Tabs'
import TabItem from '../../components/flights/TabItem'

const Flights = (): JSX.Element => {
  return (
    <LayoutPage title='Vuelos - Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <Section>
        <Tabs>
          <TabItem number='1' label='Selecciona tu vuelo'>
            <h2>Buenas 1</h2>
          </TabItem>
          <TabItem number='2' label='Completa tus datos'>
            <h2>Buenas 2</h2>
          </TabItem>
          <TabItem number='3' label='Finaliza la reserva'>
            <h2>
              Buenas 3
            </h2>
          </TabItem>
        </Tabs>
        <h1>
          Vuelos
        </h1>
      </Section>

      {/* Contact form */}
      <Section className='mb-32'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <ContactForm />

          <img
            src='http://noticiasmachupicchu.com/wp-content/uploads/2019/10/llamita.jpg'
            alt=''
            className='h-full w-full rounded-md border border-white'
          />
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Flights
