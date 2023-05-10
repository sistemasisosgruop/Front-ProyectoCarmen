import { useState } from 'react'
import { MdFlightLand } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { GiPerson } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoMdWalk
} from 'react-icons/io'

const SearchFlights = (): JSX.Element => {
  const [numAdultPassengers, setNumAdultPassengers] = useState<number>(1)
  const [numChildPassengers, setNumChildPassengers] = useState<number>(1)

  const addAdultPassenger = (): void => {
    setNumAdultPassengers(numAdultPassengers + 1)
  }

  const subtractAdultPassenger = (): void => {
    setNumAdultPassengers(numAdultPassengers - 1)
  }

  const addChildPassenger = (): void => {
    setNumChildPassengers(numChildPassengers + 1)
  }

  const subtractChildPassenger = (): void => {
    setNumChildPassengers(numChildPassengers - 1)
  }

  return (
    <div className='flex flex-col items-start gap-8 px-8 py-4'>
      <article className='flex flex-wrap justify-start items-start gap-6 md:gap-16 xl:gap-24 xl:flex-nowrap'>
        <div className='flex flex-col gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <MdFlightLand size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Tipo de vuelo
            </span>
          </p>
          <select className='bg-white text-gray-600 py-[2px] px-2 border-b border-b-gray-400 focus:border-b-blue'>
            <option value='multiples-destinos'>Múltiples destinos</option>
            <option value='ida-y-vuelta'>Ida y vuelva</option>
            <option value='solo-ida'>Solo ida</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <HiUserGroup size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              N° de pasajeros adultos
            </span>
          </p>
          <div className='flex justify-start items-center gap-4'>
            {numAdultPassengers > 1 && (
              <button
                onClick={subtractAdultPassenger}
                className='p-{2px}'
              >
                <IoIosRemoveCircleOutline size={22} />
              </button>
            )}
            <p className='text-xl font-bold'>
              {numAdultPassengers}
            </p>
            <button
              onClick={addAdultPassenger}
              className='p-[2px]'
            >
              <IoIosAddCircleOutline size={22} />
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
        <p className='flex justify-start items-start gap-2 sm:items-center'>
            <HiUserGroup size={18} className='text-gray-400' />
            <span className='flex flex-wrap justify-start items-center gap-2 text-base font-bold textgray-800 lg:text-lg'>
              <span>
                N° de pasajeros niños
              </span>
              <i className='text-gray-400'>(men. de 12 años)</i>
            </span>
          </p>
          <div className='flex justify-start items-center gap-4'>
            {numChildPassengers > 1 && (
              <button
                onClick={subtractChildPassenger}
                className='p-{2px}'
              >
                <IoIosRemoveCircleOutline size={22} />
              </button>
            )}
            <p className='text-xl font-bold'>
              {numChildPassengers}
            </p>
            <button
              onClick={addChildPassenger}
              className='p-[2px]'
            >
              <IoIosAddCircleOutline size={22} />
            </button>
          </div>
        </div>
      </article>

      {/* second row */}
      <article className='flex flex-wrap justify-start items-start gap-8 md:gap-16 xl:gap-24'>
        <div className='flex flex-col gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <IoMdWalk size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Origen
            </span>
          </p>
          <select className='bg-white text-gray-600 py-[2px] px-2 border-b border-b-gray-400 focus:border-b-blue'>
            <option value='origen'>¿De que parte del perú vendrán?</option>
            <option value='cusco'>Cusco</option>
            <option value='arequipa'>Arequipa</option>
            <option value='ica'>Ica</option>
            <option value='amazonas'>Amazonas</option>
            <option value='puno'>Puno</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <GiPerson size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Destino del Perú
            </span>
          </p>
          <select className='bg-white text-gray-600 py-[2px] px-2 border-b border-b-gray-400 focus:border-b-blue'>
            <option value='destino'>¿Qué parte del Perú quieres visitar?</option>
            <option value='cusco'>Cusco</option>
            <option value='arequipa'>Arequipa</option>
            <option value='ica'>Ica</option>
            <option value='amazonas'>Amazonas</option>
            <option value='puno'>Puno</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <FaCalendarAlt size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Fechas deseadas
            </span>
          </p>
          <div className='flex flex-wrap justify-start items-center gap-4 md:justify-center'>
            <div>
              <input
                type='date'
                className='border border-gray-600 rounded-md text-base text-gray-600 px-4 py-1 focus:outline-none focus:border-blue'
              />
            </div>
            <div>
              <input
                type='date'
                className='border border-gray-600 rounded-md text-base text-gray-600 px-4 py-1 focus:outline-none focus:border-blue'
              />
            </div>
            <button
              className='bg-blue px-6 py-2 rounded-md flex justify-center items-center gap-2 text-white font-bold hover:bg-opacity-90'
            >
              <span>Buscar</span>
              <AiOutlineSearch size={18} />
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default SearchFlights
