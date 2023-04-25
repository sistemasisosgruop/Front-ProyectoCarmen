import { Link } from 'react-router-dom'
import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Heading from '../../components/Heading'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'
import SliderTourPackage from '../../components/home/SliderTourPackage'
import Card from '../../components/Card'
import { MdGroup } from 'react-icons/md'
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

const Home = (): JSX.Element => {
  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />
      <section className='bg-gray-200 w-full pt-48'>
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
      </Section>

      <Section>
        <Heading
          title='Los más populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-12 grid-rows-2 gap-4 pb-8'>
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className={`
                relative rounded-md overflow-hidden bg-white flex flex-col
                ${index === 0 || index === 3 ? 'col-span-3' : ''}
                ${index === 2 ? 'col-span-5' : ''}
                ${index === 1 ? 'col-span-4 row-span-2' : ''} 
                ${index === 4 ? 'col-span-5' : ''}
              `}
            >
              <img
                src={image.imagePath}
                alt={image.alt}
                className={`object-cover object-center h-full ${index === 1 ? 'h-full' : 'max-h-[220px]'}`}
              />
              <div className='absolute top-2 right-2 bg-white px-2 py-[2px] rounded-md flex justify-center items-center'>
                <p className='text-dark'>
                  4.5
                </p>
              </div>
              <article className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>
                    {image.typeRoom}
                  </p>
                  <p className='flex gap-1'>
                    <span className='text-green'>S/.</span>
                    <strong className='text-black font-bold'>{image.price}</strong>
                    <span>/</span>
                    <i>por dia</i>
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='flex justify-start items-center gap-2'>
                    <MdGroup size={18} className='text-green' />
                    <span>
                      Hasta {image.capacity} personas
                    </span>
                  </p>
                  <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
          ))}
        </section>
      </Section>
      <Section>
        <Heading
          title='Departamento completo'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-3 grid-rows-2 gap-4'>
          {IMAGES_DEPARTAMENT.map((image, index) => (
            <div
              key={index}
              className={`
                bg-white flex flex-col
                ${index === 0 || index === 2 ? 'row-span-2' : ''}
              `}
            >
              <img
                src={image.imagePath}
                alt={image.alt}
                className='h-full object-cover object-center'
              />
              <article className='px-4 py-2 flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <p className='text-xl font-bold text-dark'>
                    Departamento
                  </p>
                  <p className='flex gap-2'>
                    <span className='text-green'>
                      S/.
                    </span>
                    <strong>
                      90.00
                    </strong>
                    <span className='text-gray-600'>
                      / Por noche
                    </span>
                  </p>
                </div>
                <div className='flex justify-between items-end'>
                  <ul>
                    <li>
                      4 habitaciones
                    </li>
                    <li>
                      Cusco
                    </li>
                    <li>
                      Hasta 8 personas
                    </li>
                  </ul>
                  <button
                    type='button'
                    className='bg-orange text-white rounded-md px-4 py-[2px]'
                  >
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
          ))}
        </section>
      </Section>
      <Section>
        <Heading
          title='Buscar por tipo de habitacion'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-4 gap-4'>
          {IMAGES_DEPARTAMENT.map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-md overflow-hidden'
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
            className='bg-green text-white flex justify-center items-center gap-2 rounded-md font-bold px-6 py-2'
          >
            <span>
              Ver catalogo
            </span>
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </Section>
    </LayoutPage >
  )
}

export default Home

