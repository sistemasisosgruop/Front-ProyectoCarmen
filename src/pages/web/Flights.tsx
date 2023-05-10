import ContactForm from '../../components/flights/ContactForm'
import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Masthead from '../../components/Masthead'
import Tabs from '../../components/Tabs'
import TabItem from '../../components/TabItem'
import PriceList from '../../components/flights/PriceList'
import SelectFlight from '../../components/flights/SelectFlight'

const Flights = (): JSX.Element => {
  return (
    <LayoutPage title='Vuelos - Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <Section className='pt-32 mb-16'>
        <Tabs
          tabContainerStyles='flex justify-center items-center'
          tabStyle='px-16 py-4 text-xl font-bold'
          contentContainerStyles='bg-transparent mt-8 p-4'
        >
          <TabItem label='Selecciona tu vuelo' text='1'>
            <div className='w-full flex flex-col justify-center items-center gap-16'>
              <div className='mx-44'>
                <PriceList />
              </div>
              <SelectFlight />
            </div>
          </TabItem>
          <TabItem label='Completa tus datos' text='2'>
            <h1>
              Completa tus datos
            </h1>
          </TabItem>
          <TabItem label='Finalizar la reserva' text='2'>
            <h1>
              Finalizar la reserva
            </h1>
          </TabItem>
        </Tabs>
      </Section >

      {/* Contact form */}
      < Section className='mb-32' >
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <ContactForm />

          <img
            src='http://noticiasmachupicchu.com/wp-content/uploads/2019/10/llamita.jpg'
            alt=''
            className='h-full w-full rounded-md border border-white'
          />
        </div>
      </Section >
    </LayoutPage >
  )
}

export default Flights