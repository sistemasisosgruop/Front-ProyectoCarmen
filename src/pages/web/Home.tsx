import { useLang } from '../../hooks/useLang'
import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Heading from '../../components/Heading'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'
import SliderTourPackage from '../../components/home/SliderTourPackage'
import Comments from '../../components/home/Comments'
import Card from '../../components/Card'
import ButtonLink from '../../components/ButtonLink'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const Home = (): JSX.Element => {
  const { t } = useLang()

  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />

      <section className='bg-gray-200 w-full pt-56'>
        <SliderTourPackage />
      </section>

      <Section className='pt-16 md:pt-32'>
        <Heading
          title={t('home.popularRooms')}
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card
            imagePath='/images/popular-rooms/01.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/02.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/03.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/04.jpg'
            alt='image popular room'
          />
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/catalogo-habitaciones'
            text='Ver catálogo'
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      <Section className='pt-32'>
        <Heading
          title={t('home.popularDestinations')}
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card
            imagePath='/images/popular-rooms/01.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/02.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/03.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/04.jpg'
            alt='image popular room'
          />
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/destinos-populares'
            text='Ver catálogo'
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      <Section className='py-32'>
        <Heading
          title={t('home.popularFlights')}
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card
            imagePath='/images/popular-rooms/01.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/02.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/03.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/04.jpg'
            alt='image popular room'
          />
        </section>
        <div className='flex justify-center items-center'>
          <ButtonLink
            to='/catalogo-habitaciones'
            text='Ver catálogo'
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition='right'
          />
        </div>
      </Section>

      <Section className='bg-white pt-32'>
        <Comments />
      </Section>
    </LayoutPage >
  )
}

export default Home
