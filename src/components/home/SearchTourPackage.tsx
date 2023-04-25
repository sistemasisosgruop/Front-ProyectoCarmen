import { AiOutlineSearch } from 'react-icons/ai'
import { GiPerson } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoMdWalk } from 'react-icons/io'

const SearchTourPackage = (): JSX.Element => {
  return (
    <div>
      <article className='flex justify-start items-start gap-24 px-6 py-4'>
        <div className='flex flex-col gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <IoMdWalk size={18} className='text-gray-400' />
            <span className='text-lg font-bold text-gray-800'>
              Destino del Perú
            </span>
          </p>
          <select className='bg-white text-gray-600 py-[2px] px-2 border-b-2 border-b-gray-400 focus:border-b-orange'>
            <option value='origen'>¿Que parte del Perú desea visitar?</option>
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
            <span className='text-lg font-bold text-gray-800'>
              Paquetes turísticos
            </span>
          </p>
          <select className='bg-white text-gray-600 py-[2px] px-2 border-b-2 border-b-gray-400 focus:border-b-orange'>
            <option value='destino'>Selecciona un paquete</option>
            <option value='cusco'>Valle sagrado del Cusco</option>
            <option value='arequipa'>Montaña 7 colores</option>
            <option value='ica'>City Tour</option>
            <option value='amazonas'>Camino del Inca</option>
            <option value='puno'>Laguna de Huamantay</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <FaCalendarAlt size={18} className='text-gray-400' />
            <span className='text-lg font-bold text-gray-800'>
              Fechas deseadas
            </span>
          </p>
          <div className='flex justify-start items-center gap-4'>
            <div>
              <input
                type='date'
                className='border border-gray-600 rounded-md text-base text-gray-600 px-4 py-[2px] focus:border-none'
              />
            </div>
            <div>
              <input
                type='date'
                className='border border-gray-600 rounded-md text-base text-gray-600 px-4 py-[2px] focus:border-none focus:no-underline'
              />
            </div>
            <button
              className='bg-orange px-6 py-2 rounded-md flex justify-center items-center gap-2 text-white font-bold hover:bg-opacity-90'
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

