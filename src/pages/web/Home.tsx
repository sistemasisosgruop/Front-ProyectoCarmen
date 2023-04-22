import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'

const Home = (): JSX.Element => {
  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />
      <Section>
        <h2 className='text-2xl font-bold h-96'>
          Habitaciones populares
        </h2>
      </Section>
    </LayoutPage>
  )
}

export default Home

