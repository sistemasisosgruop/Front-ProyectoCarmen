import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import DatePicker from 'react-datepicker'
import FormSelect from '@forms/FormSelect'
import Button from '@components/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiPerson } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoMdWalk } from 'react-icons/io'

const OPTIONS = [
  { text: 'Cusco', value: 'cusco' },
  { text: 'Arequipa', value: 'arequipa' },
  { text: 'Ica', value: 'ica' },
  { text: 'Amazonas', value: 'amazonas' },
  { text: 'Puno', value: 'puno' }
]

const SearchTourPackage = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const { t } = useLang()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <FormSelect
        name="destination"
        label={t('pages.home.destination_in_Peru')}
        options={OPTIONS}
        showIcon={true}
        iconPosition="left"
        placeholder={t('pages.home.place_to_visit')}
        icon={<IoMdWalk size={18} />}
      />

      <FormSelect
        name="destination"
        label={t('pages.home.select_tour_package')}
        options={OPTIONS}
        showIcon={true}
        iconPosition="left"
        placeholder={t('general.tour_packages')}
        icon={<GiPerson size={18} />}
      />

      <div className="w-full flex flex-col justify-center items-start gap-4 sm:col-span-2">
        <p className="flex justify-start items-center gap-2">
          <FaCalendarAlt size={18} className="text-gray-400" />
          <span className="text-base font-bold text-gray-800 lg:text-lg">
            {t('pages.home.desired_dates')}
          </span>
        </p>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
            className="w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue"
            showIcon={true}
          />
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
            className="w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue"
            showIcon={true}
          />
          <Button
            text={t('general.search')}
            isIcon={true}
            icon={<AiOutlineSearch size={18} />}
            position="right"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchTourPackage
