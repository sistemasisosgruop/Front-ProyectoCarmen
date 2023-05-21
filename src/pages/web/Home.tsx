import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Heading from '@components/Heading'
import Masthead from '@components/Masthead'
import ServiceSearch from '@components/home/ServiceSearch'
import SliderTourPackage from '@components/home/SliderTourPackage'
import FeedbackSection from '@components/feedback/FeedbackSection'
import Card from '@components/Card'
import ButtonLink from '@components/ButtonLink'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const Home = (): JSX.Element => {
  const { t } = useLang()

  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />

      <section className='w-full h-full border-y border-y-gray-100 mt-[420px] sm:mt-80 md:mt-64'>
        <SliderTourPackage />
      </section>

      <Section className='pt-16 md:pt-32'>
        <Heading
          title={t('pages.home.popular_rooms')}
          description={t('pages.home.description_popular_rooms')}
        />
        <section className='grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 xl:grid-cols-4'>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              href='/habitaciones/detalle'
              imagePath='https://i.pinimg.com/originals/38/f2/ea/38f2eaee058ad116a31b7eebc621650f.jpg'
              alt='image popular room'
            />
          ))}
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/catalogo-habitaciones'
            text={t('general.view_catalog')}
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      <Section className='pt-32'>
        <Heading
          title={t('pages.home.popular_destinations')}
          description={t('pages.home.description_popular_destinations')}
        />
        <section className='grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 xl:grid-cols-4'>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              href='/habitaciones/detalle'
              imagePath='https://img.europapress.es/fotoweb/fotonoticia_20171009090720_1024.jpg'
              alt='image popular room'
            />
          ))}
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/destinos-populares'
            text={t('general.view_catalog')}
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      <Section className='py-32'>
        <Heading
          title={t('pages.home.popular_flights')}
          description={t('pages.home.description_popular_flights')}
        />
        <section className='grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 xl:grid-cols-4'>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              href='/habitaciones/detalle'
              imagePath='http://www.subturismo.gob.cl/wp-content/uploads/2017/10/TREKKING-LAGUNAS-COTACOTANI-3.jpg'
              alt='image popular room'
            />
          ))}
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/vuelos'
            text={t('general.view_catalog')}
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      {/* Section for comments of clients */}
      <FeedbackSection />
    </LayoutPage >
  )
}

export default Home
