import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Autocomplete from '../Autocomplete'
import Button from '../Button'
import FormInput from '../FormInput'

interface Props {
  closeModal: () => void
}

const AddCouponForm = ({ closeModal }: Props): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any): void => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <article className='grid grid-cols-2 gap-4'>
        <FormInput
          register={register}
          errors={errors}
          rules={{ required: true }}
          label='Código de cupón'
          name='couponCode'
        />
        <FormInput
          register={register}
          errors={errors}
          rules={{ required: true }}
          label='Descuento asignado'
          name='assignedDiscount'
        />
      </article>

      <article>
        <p className='inline-block text-gray-600 mb-2'>
          Asignar producto
        </p>
        <div className='flex flex-col gap-4'>
          <Autocomplete
            label='Selecciona un paquete turístico'
            name='touristPackages'
            results={[
              { text: 'Uno', value: 'uno' },
              { text: 'Dos', value: 'dos' },
              { text: 'tres', value: 'tres' },
              { text: 'Cuatro', value: 'cuatro' },
              { text: 'Cinco', value: 'cinco' }
            ]}
          />

          <Autocomplete
            label='Selecciona una habitación'
            name='room'
            results={[
              { text: 'Uno', value: 'uno' },
              { text: 'Dos', value: 'dos' },
              { text: 'tres', value: 'tres' },
              { text: 'Cuatro', value: 'cuatro' },
              { text: 'Cinco', value: 'cinco' }
            ]}
          />
        </div>
      </article>
      <article className='flex justify-between items-center'>
        <Button
          text='Cancelar'
          background='bg-wite border border-gray-600'
          textColor='text-dark'
          onClick={closeModal}
        />
        <Button
          text='Guardar'
          background='bg-orange'
        />
      </article>
    </form>
  )
}

export default AddCouponForm
