import { useForm } from 'react-hook-form'
import Button from '@components/Button'
import FormInput from '@components/FormInput'

const OrderSummary = (): JSX.Element => {
  const { register, formState: { errors } } = useForm()

  return (
    <div>
      <h3 className='text-xl text-dark text-center font-bold mb-4'>
        Resumen del pedido
      </h3>
      <article className='w-full flex flex-col gap-2'>
        <p className='flex justify-between items-center gap-4 text-dark'>
          <span>
            Habitación doble
          </span>
          <span>
            500.00
          </span>
        </p>
        <p className='flex justify-between items-center gap-4 text-dark'>
          <span>
            Tour Valle Sagrado de los Incas (x{'2'})
          </span>
          <span>
            5,312.00
          </span>
        </p>
        <p className='flex justify-between items-center gap-4 text-dark'>
          <span>
            IGV(18%)
          </span>
          <span>
            956.80
          </span>
        </p>
        <p className='flex justify-between items-center gap-4 text-gray-600'>
          <span>
            Subtotal
          </span>
          <span>
            $700.00
          </span>
        </p>
      </article>

      <hr className='w-full border-none bg-gray-200 py-[0.5px] my-4' />

      <form className='flex justify-between items-end gap-4'>
        <FormInput
          label='Código de cupón'
          name='couponCode'
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
        <Button
          text='Hecho'
          background='bg-orange'
        />
      </form>
      <article className='mt-8'>
        <p className='uppercase text-dark flex justify-between items-center'>
          <span className='font-bold'>
            Total
          </span>
          <span className='text-gray-600 text-sm'>
            $ 7,000.00
          </span>
        </p>
      </article>
    </div>
  )
}

export default OrderSummary
