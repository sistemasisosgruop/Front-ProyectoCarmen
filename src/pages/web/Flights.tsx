import { useTabs } from '@hooks/useTabs'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Masthead from '@components/Masthead'
import Tabs from '@components/Tabs'
import TabItem from '@components/TabItem'
import PriceList from '@components/flights/PriceList'
import SelectFlight from '@components/flights/SelectFlight'
import ContactFormSection from '@components/contact-form/ContactFormSection'

const Flights = (): JSX.Element => {
  const { activeTab, switchTab } = useTabs(0)

  return (
    <LayoutPage title='Vuelos - Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <Section className='pt-32 mb-16'>
        <Tabs
          tabContainerStyles='flex justify-center items-center'
          tabStyle='px-16 py-4 text-xl font-bold'
          contentContainerStyles='bg-transparent mt-8 p-4'
          activeTab={activeTab}
          switchTab={switchTab}
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
      <div className='mb-16'>
        <ContactFormSection />
      </div>
    </LayoutPage >
  )
}

export default Flights
