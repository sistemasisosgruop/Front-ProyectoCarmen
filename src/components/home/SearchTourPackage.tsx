import { AiOutlineSearch } from 'react-icons/ai'
import { GiPerson } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoMdWalk } from 'react-icons/io'

const SearchTourPackage = (): JSX.Element => {
  return (
    <div className=''>
      <article className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8'>
        <div className='w-full flex flex-col gap-2 lg:col-span-2'>
          <p className='flex justify-start items-center gap-2'>
            <IoMdWalk size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Destino del Perú
            </span>
          </p>
          <select className='w-full bg-white text-gray-600 py-1 px-2 border-b border-b-gray-400 focus:border-b-blue'>
            <option value='origen'>¿Que parte del Perú desea visitar?</option>
            <option value='cusco'>Cusco</option>
            <option value='arequipa'>Arequipa</option>
            <option value='ica'>Ica</option>
            <option value='amazonas'>Amazonas</option>
            <option value='puno'>Puno</option>
          </select>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-2 lg:justify-start lg:col-span-2'>
          <p className='flex justify-start items-center gap-2'>
            <GiPerson size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Paquetes turísticos
            </span>
          </p>
          <select className='w-full bg-white text-gray-600 py-1 px-2 border-b border-b-gray-400 focus:border-b-blue'>
            <option value='destino'>Selecciona un paquete</option>
            <option value='cusco'>Valle sagrado del Cusco</option>
            <option value='arequipa'>Montaña 7 colores</option>
            <option value='ica'>City Tour</option>
            <option value='amazonas'>Camino del Inca</option>
            <option value='puno'>Laguna de Huamantay</option>
          </select>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-4 sm:col-span-2 lg:col-span-4'>
          <p className='flex justify-start items-center gap-2'>
            <FaCalendarAlt size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              Fechas deseadas
            </span>
          </p>
          <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 md:items-center lg:grid-cols-2'>
            <div className='w-full'>
              <input
                type='date'
                className='w-full border border-gray-600 rounded-md text-base text-gray-600 px-6 py-1 focus:outline-none focus:border-blue'
              />
            </div>
            <div className='w-full'>
              <input
                type='date'
                className='w-full border border-gray-600 rounded-md text-base text-gray-600 px-6 py-1 focus:outline-none focus:border-blue'
              />
            </div>
            <button
              className='w-full bg-blue px-6 py-2 rounded-xl flex justify-center items-center gap-2 text-white font-bold hover:bg-opacity-90 sm:col-span-2 sm:gap-8 md:col-span-1 md:gap-4 lg:col-span-2'
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

export default SearchTourPackage
