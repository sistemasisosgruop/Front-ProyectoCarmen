import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Recommendation from '../../components/room-catalog/Recommendation'
import RoomCard from '../../components/room-catalog/RoomCard'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const RoomCatalog = (): JSX.Element => {
  return (
    <LayoutPage title='Catalogo de habitaciones - Carmen Agencia de Viajes y Turismo'>
      <div className='mx-8 pt-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Recommendation />
      </div>
      <Section>
        <div className='grid grid-cols-4 gap-4'>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </Section>

      <Section className='mt-32'>
        <div className='flex justify-between items-start gap-8'>
          <article className='rounded-md overflow-hidden relative'>
            <img
              src='https://fotos.perfil.com/2019/09/26/trim/1280/720/0926turismo3-784899.jpg'
              alt='image'
              className=''
            />
            <div className='absolute top-0 left-0 bg-dark bg-opacity-20 w-full h-full grid place-content-center p-8'>
              <h2 className='text-2xl text-white font-bold uppercase'>
                ¿Nuevo en Cusco?
                <br />
                !Descubre nuestros increibles paquetes para acompañar tu estadia¡
              </h2>
              <p className='text-xl text-white'>
                Reserva con nosotros
              </p>
            </div>
          </article>
          <article className='rounded-md overflow-hidden relative'>
            <img
              src='https://fotos.perfil.com/2019/09/26/trim/1280/720/0926turismo3-784899.jpg'
              alt='image'
              className=''
            />
            <div className='absolute top-0 left-0 bg-dark bg-opacity-20 w-full h-full grid place-content-center p-8'>
              <h2 className='text-2xl text-white font-bold uppercase'>
                ¿Nuevo en Cusco?
                <br />
                !Descubre nuestros increibles paquetes para acompañar tu estadia¡
              </h2>
              <p className='text-xl text-white'>
                Reserva con nosotros
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className='my-32'>
        <div className='grid grid-cols-4 gap-4'>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>

        <div className='flex justify-center items-center gap-2 mt-8'>
          <button type='button' className='rounded-full w-8 h-8 bg-white text-dark grid place-content-center font-bold'>
            1
          </button>
          <button type='button' className='rounded-full w-8 h-8 bg-turquoise text-white grid place-content-center font-bold'>
            2
          </button>
          <button type='button' className='rounded-full w-8 h-8 bg-white text-dark grid place-content-center font-bold'>
            3
          </button>
          <button type='button' className='rounded-full w-8 h-8 bg-white text-dark grid place-content-center font-bold'>
            4
          </button>
          <button type='button' className='rounded-full w-8 h-8 bg-white text-gray-400 grid place-content-center font-bold'>
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default RoomCatalog
