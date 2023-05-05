import { Link } from 'react-router-dom'
import { useLang } from '../../hooks/useLang'
import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Heading from '../../components/Heading'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'
import SliderTourPackage from '../../components/home/SliderTourPackage'
import Card from '../../components/Card'
import CommentCard from '../../components/CommentCard'
import { AiFillStar } from 'react-icons/ai'

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
          <Link to='/catalogo-habitaciones' className='bg-orange text-white font-bold rounded-md px-5 py-2 hover:bg-opacity-90'>
            <span>Ver catálogo</span>
          </Link>
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
          <Link
            to='/destinos-populares'
            className='bg-orange text-white font-bold rounded-md px-5 py-2 hover:bg-opacity-90'
          >
            <span>Ver catálogo</span>
          </Link>
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
          <button className='bg-orange text-white font-bold rounded-md px-5 py-2 hover:bg-opacity-90'>
            <span>Ver catálogo</span>
          </button>
        </div>
      </Section>

      <Section className='bg-white pt-32'>
        <div className='xl:px-32'>
          <h2 className='text-2xl tetx-dark font-bold text-center xl:text-4xl'>
            {t('home.commentsSection.theCommentOf')} <span className='text-orange'>{t('home.commentsSection.ourClients')}</span>
          </h2>
          <p className='text-xl text-dark text-center xl:text-2xl'>
            {t('home.commentsSection.description')}
          </p>
          <hr className='border-b-2 border-b-gray-400 mt-4' />
        </div>
        <div className='flex justify-center items-center gap-8 py-8 xl:gap-32'>
          <p className='flex flex-col justify-center items-center gap-1 text-center'>
            <span className='text-2xl text-dark font-bold xl:text-6xl'>
              5.0
            </span>
            <span className='text-sm md:text-base'>
              {t('home.commentsSection.qualification')}
            </span>
          </p>
          <div className='text-yellow-600 flex justify-start gap-2'>
            <AiFillStar size={32} />
            <AiFillStar size={32} />
            <AiFillStar size={32} />
            <AiFillStar size={32} />
            <AiFillStar size={32} />
          </div>
        </div>
        <div className='flex flex-col gap-8 pb-16 md:px-16'>
          <CommentCard
            username='Maria Luisa Paredes Diaz'
            comment='scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate.'
            qualification={5}
          />
          <CommentCard
            username='Edin Yoel Valverde Polo'
            comment='scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate.'
            qualification={5}
          />
        </div>
      </Section>
    </LayoutPage >
  )
}

export default Home
