import { useForm } from 'react-hook-form'
import { useGetRequest } from '@hooks/useGetRequest'
import Input from '@forms/Input'
import Autocomplete from '@forms/Autocomplete'
import Button from '@components/Button'
import { type DepartmentResponse } from 'types/department'
import { usePostRequest } from '@hooks/usePostRequest'

function AddCoupon() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { data } = useGetRequest<DepartmentResponse>({
    url: 'departments'
  })
  const { onSubmit } = usePostRequest({
    url: 'coupons'
  })

  const departmentValues = data?.results.map(department => ({
    text: department.departmentType,
    value: department.id
  }))

  // const onHandleSubmit: SubmitHandler<FieldValues> = data => {
  //   const couponData = {
  //     coupon_code: data.couponCode,
  //     discount: parseFloat(data.discount),
  //     room_id: data.roomId || null,
  //     tour_id: data.tourId || null
  //   }
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <article className="grid grid-cols-2 gap-4">
        <Input
          name="couponCode"
          label="Código de cupón"
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          name="discount"
          label="Descuento asignado"
          register={register}
          errors={errors}
          required={true}
        />
      </article>

      <article>
        <p className="inline-block text-gray-600 mb-2">Asignar producto</p>
        <div className="flex flex-col gap-4">
          <Autocomplete
            id="tourId"
            label="Selecciona un paquete turístico"
            register={register}
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
            id="roomId"
            register={register}
            results={departmentValues || []}
          />
        </div>
      </article>
      <article className="flex justify-between items-center">
        {/* <Button
          text="Cancelar"
          background="bg-wite border border-gray-600"
          textColor="text-dark"
          onClick={closeModal}
        /> */}
        <Button text="Guardar" type="submit" background="bg-orange" />
      </article>
    </form>
  )
}

export default AddCoupon
