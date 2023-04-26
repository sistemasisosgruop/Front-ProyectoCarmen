import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Heading from '../../components/Heading'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'
import SliderTourPackage from '../../components/home/SliderTourPackage'
import Card from '../../components/Card'
import { AiFillStar } from 'react-icons/ai'
import CommentCard from '../../components/CommentCard'

const Home = (): JSX.Element => {
  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />
      <section className='bg-gray-200 w-full pt-56'>
        <SliderTourPackage />
      </section>

      <Section>
        <Heading
          title='Habitaciones populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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

      <Section>
        <Heading
          title='Destinos populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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

      <Section>
        <Heading
          title='Vuelos populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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

      <Section>
        <Heading
          title='Destinos populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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
      </Section>
      <Section className='bg-white'>
        <div className='px-32'>
          <h2 className='text-4xl tetx-dark font-bold text-center'>
            Los comentarios de <span className='text-orange'>nuestros clientes</span>
          </h2>
          <p className='text-2xl text-dark text-center'>
            Mira algunas opiniones de nuestros cliente
          </p>
          <hr className='border-b-2 border-b-gray-400 mt-4' />
        </div>
        <div className='flex justify-center items-center gap-32 py-8'>
          <p className='flex flex-col justify-center items-center gap-1'>
            <span className='text-6xl text-dark font-bold'>
              5.0
            </span>
            <span>
              Calificacion general
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
        <div className='px-16 flex flex-col gap-8 pb-16'>
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

