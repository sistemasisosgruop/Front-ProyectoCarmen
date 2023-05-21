import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import DatePicker from 'react-datepicker'
import NumberPicker from '@forms/NumberPicker'
import FormSelect from '@forms/FormSelect'
import Button from '@components/Button'
import { MdFlightLand } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { GiPerson } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoMdWalk } from 'react-icons/io'

const SearchFlights = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [numAdultPassengers, setNumAdultPassengers] = useState<number>(1)
  const [numChildPassengers, setNumChildPassengers] = useState<number>(1)
  const { t } = useLang()

  return (
    <div className='w-full grid grid-cols-1 gap-4'>
      <article className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8'>
        <FormSelect
          label={t('pages.home.flight_type')}
          name='typeFlight'
          placeholder={t('pages.home.select_tour_package')}
          showIcon={true}
          iconPosition='left'
          icon={<MdFlightLand size={18} />}
          options={[
            { text: 'Múltiples destinos', value: 'multiples-destinos' },
            { text: 'Ida y vuela', value: 'ida-y-vuelta' },
            { text: 'Solo ida', value: 'solo-ida' }
          ]}
        />
        <NumberPicker
          label={t('pages.home.adults_number')}
          htmlFor='adultPassengers'
          value={numAdultPassengers}
          onChangeValue={setNumAdultPassengers}
          textStyle='text-base font-bold text-gray-800 lg:text-lg'
          showIcon={true}
          icon={<HiUserGroup size={18} className='text-gray-400' />}
        />
        <NumberPicker
          label={t('pages.home.children_number')}
          htmlFor='childPassengers'
          value={numChildPassengers}
          onChangeValue={setNumChildPassengers}
          textStyle='text-base font-bold text-gray-800 lg:text-lg'
          showIcon={true}
          icon={<HiUserGroup size={18} className='text-gray-400' />}
        />
      </article>

      {/* second row */}
      <article className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <FormSelect
          label={t('pages.home.origin')}
          name='origen'
          placeholder={t('pages.home.select_place_origin')}
          showIcon={true}
          iconPosition='left'
          icon={<IoMdWalk size={18} />}
          options={[
            { text: 'Cusco', value: 'cusco' }
          ]}
        />
        <FormSelect
          label={t('pages.home.destination_in_Peru')}
          name='destination'
          placeholder={t('pages.home.select_place_destination')}
          showIcon={true}
          iconPosition='left'
          icon={<GiPerson size={18} />}
          options={[
            { text: 'Cusco', value: 'cusco' }
          ]}
        />

        <div className='flex flex-col justify-center items-start gap-2 sm:col-span-2'>
          <p className='flex justify-start items-center gap-2'>
            <FaCalendarAlt size={18} className='text-gray-400' />
            <span className='text-base font-bold text-gray-800 lg:text-lg'>
              {t('pages.home.desired_dates')}
            </span>
          </p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => { setStartDate(date) }}
              className='w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue'
              showIcon={true}
            />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => { setStartDate(date) }}
              className='w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue'
              showIcon={true}
            />
            <Button
              text={t('general.search')}
              isIcon={true}
              icon={<AiOutlineSearch size={18} />}
              position='right'
            />
          </div>
        </div>
      </article>
    </div>
  )
}

export default SearchFlights
