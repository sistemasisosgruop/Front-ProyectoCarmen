import { useForm } from 'react-hook-form'
import FormInput from '@components/forms/FormInput'
import Button from '@components/Button'

const PaymentPaypalCard = (): JSX.Element => {
  const { register, formState: { errors } } = useForm()

  return (
    <form className='flex flex-col gap-4'>
      <article>
        <FormInput
          label='Correo electrónico'
          name='email'
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
      </article>

      <div>
        <div className='flex justify-between items-center gap-4 my-4'>
          <h4 className='text-lg font-bold'>
            PayPal
          </h4>
          <article>
          </article>
        </div>

        <article className='grid grid-cols-1 gap-4'>
          <FormInput
            label='Email o correo electrónico'
            name='email'
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <FormInput
            label='Contraseña'
            name='password'
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </article>
      </div>

      <label htmlFor='rememberCard' className='flex justify-start items-center gap-2'>
        <input type='checkbox' name='rememberCard' id='rememberCard' />
        <span>
          Recorda cuenta PayPal
        </span>
      </label>
      <article>
        <Button
          text='Guardar'
          background='bg-orange'
        />
      </article>
    </form>
  )
}

export default PaymentPaypalCard
