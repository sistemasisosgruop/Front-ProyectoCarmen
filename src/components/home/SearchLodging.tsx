import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Button from '../Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BiDoorOpen } from 'react-icons/bi'

const SearchLodging = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <div className='flex flex-col justify-start items-center gap-8 px-8 py-4 md:flex-row md:gap-24'>
      <article className='flex flex-col justify-start items-start gap-1'>
        <div className='flex justify-start items-center gap-2'>
          <BiDoorOpen size={24} className='text-gray-500' />
          <p className='text-xl font-bold lg:text-2xl'>
            Habitación
          </p>
        </div>
        <span className='text-xs text-gray-600 font-bold indent-8'>
          Escoge el tipo de habitación
        </span>
      </article>
      <article className='flex flex-wrap justify-center items-end gap-8'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='flex items-center gap-2'>
            <MdOutlineEditCalendar size={22} className='text-gray-500' />
            <p className='text-base font-bold lg:text-lg'>
              Fecha de inicio
            </p>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => { setStartDate(date) }}
            className='w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue'
            showIcon={true}
          />
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='flex items-center gap-2'>
            <MdOutlineEditCalendar size={22} className='text-gray-500' />
            <p className='text-base font-bold lg:text-lg'>
              Fecha de fin
            </p>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => { setStartDate(date) }}
            className='w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue'
            showIcon={true}
          />
        </div>
        <Button
          text='Buscar'
          isIcon={true}
          icon={<AiOutlineSearch size={18} />}
          position='right'
        />
      </article>
    </div>
  )
}

export default SearchLodging
