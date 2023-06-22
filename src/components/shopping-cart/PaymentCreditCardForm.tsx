import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import MyFormInput from '@components/forms/FormInput'
import Button from '@components/Button'

function PaymentCreditCardForm() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <form className="flex flex-col gap-4">
      <article>
        <MyFormInput
          label="Correo electrónico"
          name="email"
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
      </article>

      <div>
        <div className="flex justify-between items-center gap-4 my-4">
          <h4 className="text-lg font-bold">Tarjeta de crédito</h4>
          <article></article>
        </div>
        <article className="grid grid-cols-1 gap-4">
          <MyFormInput
            label="Número de tarjeta"
            name="numberCard"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label htmlFor="ccv" className="text-sm text-gray-600">
                Fecha de vencimiento
              </label>
              <DatePicker
                selected={startDate}
                onChange={date => {
                  setStartDate(date)
                }}
                className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
              />
            </div>
            <MyFormInput label="CCV" name="expiration" register={register} rules={{ required: true }} errors={errors} />
          </div>
        </article>
      </div>

      <label htmlFor="rememberCard" className="flex justify-start items-center gap-2">
        <input type="checkbox" name="rememberCard" id="rememberCard" />
        <span>Recordar tarjeta</span>
      </label>
      <article>
        <Button text="Guardar" background="bg-orange" />
      </article>
    </form>
  )
}

export default PaymentCreditCardForm
