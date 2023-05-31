import { useForm } from 'react-hook-form'
import Autocomplete from '@forms/Autocomplete'
import MyFormInput from '@forms/FormInput'
import Button from '@components/Button'

const AddCouponForm = ({ closeModal }) => {
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <form className="flex flex-col gap-4">
      <article className="grid grid-cols-2 gap-4">
        <MyFormInput
          register={register}
          errors={errors}
          rules={{ required: true }}
          label="Código de cupón"
          name="couponCode"
        />
        <MyFormInput
          register={register}
          errors={errors}
          rules={{ required: true }}
          label="Descuento asignado"
          name="assignedDiscount"
        />
      </article>

      <article>
        <p className="inline-block text-gray-600 mb-2">Asignar producto</p>
        <div className="flex flex-col gap-4">
          <Autocomplete
            label="Selecciona un paquete turístico"
            name="touristPackages"
            results={[
              { text: 'Uno', value: 'uno' },
              { text: 'Dos', value: 'dos' },
              { text: 'tres', value: 'tres' },
              { text: 'Cuatro', value: 'cuatro' },
              { text: 'Cinco', value: 'cinco' }
            ]}
          />

          <Autocomplete
            label="Selecciona una habitación"
            name="room"
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
      <article className="flex justify-between items-center">
        <Button
          text="Cancelar"
          background="bg-wite border border-gray-600"
          textColor="text-dark"
          onClick={closeModal}
        />
        <Button text="Guardar" background="bg-orange" />
      </article>
    </form>
  )
}

export default AddCouponForm
