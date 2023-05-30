import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import DatePicker from 'react-datepicker'
import ButtonLink from '@components/ButtonLink'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { SlPresent } from 'react-icons/sl'

const PaymentDetailForm = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const { t } = useLang()

  return (
    <form>
      <h4 className="flex justify-start items-end gap-2 mb-4 md:flex-col md:items-start lg:flex-row">
        <span className="text-4xl font-bold">$ 750.00</span>
        <span className="text-xl text-gray-600 line-through">$ 1,000.00</span>
      </h4>
      <p className="flex justify-start items-center gap-2">
        <AiFillStar size={18} className="text-orange" />
        <span className="font-bold">4.5</span>
        <span className="text-gray-600">(10 {t('general.reviews')})</span>
      </p>

      <article className="my-8">
        <p className="text-gray-600 mb-1">{t('pages.rooms.travel_dates')}</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
            showIcon
            className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
          />
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
            showIcon
            className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
          />
        </div>
      </article>

      <article className="w-full space-y-2">
        <p className="text-lg font-bold flex justify-between items-center gap-4">
          <span className="text-gray-600">$ 500.00</span>
          <span>$ 1,500.00</span>
        </p>
        <p className="text-lg font-bold flex justify-between items-center gap-4">
          <span>{t('general.total')}</span>
          <span>$ 1,500.00</span>
        </p>
      </article>
      <article className="mt-8">
        <ButtonLink
          to="/carrito-de-compras"
          text={t('general.add_to_cart')}
          background="bg-orange"
          showIcon={true}
          iconPosition="right"
          icon={<AiOutlineShoppingCart size={18} />}
          extraClasses="sm:w-full"
        />
      </article>

      <article className="my-8 flex flex-col justify-center items-center gap-2">
        <SlPresent size={48} className="text-orange" />
        <p>
          {t('pages.rooms.days_left_to_book', { days: 2 })}
          <span className="text-orange font-bold">&nbsp;Reserva ahora.</span>
        </p>
      </article>
    </form>
  )
}

export default PaymentDetailForm
