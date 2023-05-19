import { Link } from 'react-router-dom'
import LayoutPage from '@components/layouts/LayoutPage'
import Section from '@components/layouts/Section'
import Masthead from '@components/Masthead'
import Heading from '@components/Heading'
import Card from '@components/Card'
import PopularRoomCard from '@components/PopularRoomCard'
import DepartmentCard from '@components/DepartmentCard'
import { AiOutlineArrowRight } from 'react-icons/ai'

const IMAGES = [
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 01',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 02',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 03',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 04',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 05',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  }
]

const IMAGES_DEPARTAMENT = [
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 01',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 02',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 03',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  },
  {
    imagePath: 'images/popular-rooms/01.jpg',
    alt: 'Image of popular room 04',
    typeRoom: 'Duplex',
    price: '90.00',
    capacity: 4
  }
]

const Rooms = (): JSX.Element => {
  return (
    <LayoutPage title='Las mejores habitaciones - Carmen Agencia de Viajes y Turismo'>
      <Masthead />

      <Section className='pt-32'>
        <Heading
          title='Promociones'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              href='/'
              imagePath='/images/popular-rooms/01.jpg'
              alt='image popular room'
            />
          ))}
        </section>
        <div className='flex justify-center items-center'>
          <button className='bg-orange text-white font-bold rounded-md px-5 py-2 hover:bg-opacity-90'>
            <span>Ver catálogo</span>
          </button>
        </div>
      </Section>

      <Section className='pt-32'>
        <Heading
          title='Los más populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-12 lg:row-span-2 gap-4 pb-8'>
          {IMAGES.map((image, index) => (
            <PopularRoomCard
              key={index}
              index={index}
              image={image}
            />
          ))}
        </section>
      </Section>

      <Section className='pt-32'>
        <Heading
          title='Departamento completo'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-6 grid-rows-2 gap-4'>
          {IMAGES_DEPARTAMENT.map((image, index) => (
            <DepartmentCard
              key={index}
              index={index}
              image={image}
            />
          ))}
        </section>
      </Section>

      <Section className='py-32'>
        <h2 className='text-4xl font-bold text-dark mb-4'>
          Buscar por tipo de habitacion
        </h2>
        <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-xl overflow-hidden border border-white'
            >
              <img
                src={image.imagePath}
                alt={image.alt}
                className=''
              />
              <article className='px-4 py-4'>
                <p className='text-xl font-bold text-dark'>
                  Matrimoniales
                </p>
                <p>
                  10+ habitaciones
                </p>
                <Link
                  to='ver-mas'
                  className='inline-block mt-2 bg-orange text-white rounded-md px-6 py-[2px]'
                >
                  Ver mas
                </Link>
              </article>
            </div>
          ))}
        </section>
        <div className='my-8 flex justify-center items-center'>
          <button
            type='button'
            className='bg-turquoise text-white flex justify-center items-center gap-2 rounded-xl font-bold px-6 py-2'
          >
            <span>
              Ver catalogo
            </span>
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Rooms
