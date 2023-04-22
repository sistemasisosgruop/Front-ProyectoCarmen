import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BiDoorOpen } from 'react-icons/bi'

const SearchLodging = (): JSX.Element => {
  return (
    <div className='flex justify-start items-center gap-32 px-8 py-4'>
      <article className='flex flex-col justify-start items-start gap-1'>
        <div className='flex justify-start items-center gap-2'>
          <BiDoorOpen size={24} className='text-gray-500' />
          <p className='text-2xl font-bold'>
            Habitación
          </p>
        </div>
        <span className='text-xs text-gray-600 font-bold indent-8'>
          Escoge el tipo de habitación
        </span>
      </article>
      <article>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='flex items-center gap-2'>
            <MdOutlineEditCalendar size={22} className='text-gray-500' />
            <p className='text-xl font-bold'>
              Fecha de inicio
            </p>
          </div>
          <input
            type='date'
            className='appearance-none border border-gray-700 rounded-md px-2 py-1 text-base text-gray-700 focus:outline-none'
          />
        </div>
      </article>
      <article>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='flex items-center gap-2'>
            <MdOutlineEditCalendar size={22} className='text-gray-500' />
            <p className='text-xl font-bold'>
              Fecha de fin
            </p>
          </div>
          <input
            type='date'
            className='appearance-none border border-gray-700 rounded-md px-2 py-1 text-base text-gray-700 focus:outline-none'
          />
        </div>
      </article>
      <article className='grid place-content-center'>
        <button className='bg-orange flex justify-center items-center gap-1 px-4 py-2 rounded-md text-white font-bold'>
          <span>
            Buscar
          </span>
          <AiOutlineSearch size={18} />
        </button>
      </article>
    </div>
  )
}

export default SearchLodging

