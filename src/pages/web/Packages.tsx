import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Heading from '../../components/Heading'
import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Masthead from '../../components/Masthead'
import { useLang } from '../../hooks/useLang'

const Packages = (): JSX.Element => {
  const { t } = useLang()

  return (
    <LayoutPage title='Paquetes turisticos - Carmen Agencia de Viajes y Turismo'>
      <Masthead />

      <Section className='mt-32'>
        <Heading
          title={'Buscar paquetes segun destino'}
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

      <Section className='mt-32'>
        <Heading
          title={'Promociones'}
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <div className='w-full grid grid-cols-3 gap-4'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='relative bg-white rounded-xl overflow-hidden w-full flex flex-col border border-white shadow-dark group/descripcion'>
              <img
                src='https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/turismo-no-peru-machu-pichu.jpg'
                alt={`image ${index}}`}
                className=''
              />
              <div className='absolute top-2 right-2 rounded-md px-2 py-1 bg-white border border-blue border-opacity-90'>
                <p className='text-dark text-center font-bold'>4.5</p>
              </div>
              <article className='p-4'>
                <div>
                  <p className='uppercase text-blue text-center'>
                    TOUR FULLDAY
                  </p>
                  <h3 className='text-dark text-xl text-center font-bold'>
                    Laguna azul
                  </h3>
                </div>
                <ul>
                  <li>
                    5 (10)
                  </li>
                  <li>
                    Cusco, Perú
                  </li>
                  <li>
                    8 horas
                  </li>
                  <li>
                    Hasta 12 personas
                  </li>
                </ul>
                <div className='flex justify-between items-center'>
                  <p className='flex flex-col justify-start'>
                    <span className='text-gray-600'>
                      Precio por persona
                    </span>
                    <span className='text-lg font-bold'>
                      <strong className='text-blue'>S/.&nbsp;</strong>
                      <strong className='text-dark'>90.00</strong>
                    </span>
                  </p>
                  <button type='button' className=' bg-blue rounded-xl px-4 py-1 text-white text-center'>
                    Ver más
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Section>

      <Section className='my-32'>
        <div className='flex justify-between items-center mb-4'>
          <div className='mb-8'>
            <h2 className='text-4xl text-dark font-bold'>
              Lo mas popular
            </h2>
            <p className='text-dark text-xl'>
              No te pierdas nuestras promociones por esta temporada
            </p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <HiOutlineArrowSmLeft size={24} className='w-10 h-10 rounded-full bg-transparent border border-gray-600 text-dark flex justify-center items-center' />
            <HiOutlineArrowSmRight size={24} className='w-10 h-10 rounded-full bg-turquoise border border-turquoise text-white flex justify-center items-center' />
          </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-4'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='relative bg-white rounded-xl overflow-hidden w-full flex flex-col border border-white shadow-dark group/descripcion'>
              <img
                src='https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/turismo-no-peru-machu-pichu.jpg'
                alt={`image ${index}}`}
                className=''
              />
              <div className='absolute top-2 right-2 rounded-md px-2 py-1 bg-white border border-blue border-opacity-90'>
                <p className='text-dark text-center font-bold'>4.5</p>
              </div>
              <article className='p-4'>
                <div>
                  <p className='uppercase text-blue text-center'>
                    TOUR FULLDAY
                  </p>
                  <h3 className='text-dark text-xl text-center font-bold'>
                    Laguna azul
                  </h3>
                </div>
                <ul>
                  <li>
                    5 (10)
                  </li>
                  <li>
                    Cusco, Perú
                  </li>
                  <li>
                    8 horas
                  </li>
                  <li>
                    Hasta 12 personas
                  </li>
                </ul>
                <div className='flex justify-between items-center'>
                  <p className='flex flex-col justify-start'>
                    <span className='text-gray-600'>
                      Precio por persona
                    </span>
                    <span className='text-lg font-bold'>
                      <strong className='text-blue'>S/.&nbsp;</strong>
                      <strong className='text-dark'>90.00</strong>
                    </span>
                  </p>
                  <button type='button' className=' bg-blue rounded-xl px-4 py-1 text-white text-center'>
                    Ver más
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center mt-8'>
          <button
            type='button'
            className='bg-blue rounded-xl px-6 py-1 text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-80'
          >
            <span>
              Ver mas
            </span>
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Packages
