import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import DatePicker from 'react-datepicker'
import Button from '@components/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BiDoorOpen } from 'react-icons/bi'

const SearchLodging = () => {
  const [startDate, setStartDate] = useState(new Date())
  const { t } = useLang()

  return (
    <div className="flex flex-col justify-start items-center gap-8 px-8 py-4 md:flex-row md:gap-24">
      <article className="flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <BiDoorOpen size={24} className="text-gray-500" />
          <p className="text-xl font-bold lg:text-2xl">{t('pages.home.room')}</p>
        </div>
        <span className="text-xs text-gray-600 font-bold indent-8">{t('pages.home.choose_room_type')}</span>
      </article>
      <article className="flex flex-wrap justify-center items-end gap-8">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center gap-2">
            <MdOutlineEditCalendar size={22} className="text-gray-500" />
            <p className="text-base font-bold lg:text-lg">{t('pages.home.start_date')}</p>
          </div>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            className="w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center gap-2">
            <MdOutlineEditCalendar size={22} className="text-gray-500" />
            <p className="text-base font-bold lg:text-lg">{t('pages.home.end_date')}</p>
          </div>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            className="w-full border border-gray-700 rounded-xl px-2 py-1 text-base text-gray-700 focus:outline-none focus:border-blue focus:text-blue"
          />
        </div>
        <Button text={t('general.search')} showIcon={true} icon={<AiOutlineSearch size={18} />} position="right" />
      </article>
    </div>
  )
}

export default SearchLodging
