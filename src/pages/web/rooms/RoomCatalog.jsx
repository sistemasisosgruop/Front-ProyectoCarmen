import LayoutPage from '@components/layouts/LayoutPage'
import Section from '@components/layouts/Section'
import Recommendation from '@components/rooms/Recommendation'
import RoomCard from '@components/rooms/RoomCard'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const RoomCatalog = () => {
  return (
    <LayoutPage title="Catalogo de habitaciones - Carmen Agencia de Viajes y Turismo">
      <Section className="mt-48">
        <Recommendation />
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {[...Array(4)].map((_, index) => (
            <RoomCard key={index} />
          ))}
        </div>
      </Section>

      <Section className="mt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="rounded-md overflow-hidden relative">
            <img
              src="https://fotos.perfil.com/2019/09/26/trim/1280/720/0926turismo3-784899.jpg"
              alt="image"
              className=""
            />
            <div className="absolute top-0 left-0 bg-dark bg-opacity-25 w-full h-full grid place-content-center p-8">
              <h2 className="text-lg text-white font-bold uppercase md:text2xl">
                ¿Nuevo en Cusco?
                <br />
                !Descubre nuestros increibles paquetes para acompañar tu
                estadia¡
              </h2>
              <p className="text-xl text-white">Reserva con nosotros</p>
            </div>
          </article>
          <article className="rounded-md overflow-hidden relative">
            <img
              src="https://fotos.perfil.com/2019/09/26/trim/1280/720/0926turismo3-784899.jpg"
              alt="image"
              className=""
            />
            <div className="absolute top-0 left-0 bg-dark bg-opacity-25 w-full h-full grid place-content-center p-8">
              <h2 className="text-lg text-white font-bold uppercase md:text2xl">
                ¿Nuevo en Cusco?
                <br />
                !Descubre nuestros increibles paquetes para acompañar tu
                estadia¡
              </h2>
              <p className="text-xl text-white">Reserva con nosotros</p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="my-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {[...Array(4)].map((_, index) => (
            <RoomCard key={index} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-full w-8 h-8 ${
                index === 2 ? 'bg-turquoise' : 'bg-white'
              } text-dark grid place-content-center font-bold`}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            className="rounded-full w-8 h-8 bg-white text-gray-400 grid place-content-center font-bold"
          >
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default RoomCatalog
