import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '@lib/axios'
import Input from '@forms/Input'
import Autocomplete from '@forms/Autocomplete'
import Button from '@components/Button'
import { toast } from 'react-toastify'

interface Props {
  closeModal: () => void
  initialValue: any
}

function EditCoupon({ closeModal, initialValue }: Props) {
  const [departments, setDepartments] = useState([])
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    getDepartments()
    setValue('couponCode', initialValue.coupon_code)
    setValue('discount', initialValue.discount)
    setValue('roomId', initialValue.room_id)
    setValue('tourId', initialValue.tour_id)
  }, [])

  const getDepartments = async () => {
    try {
      const response = await axios.get('rooms', {
        headers: {
          Authorization: `jwt ${window.sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      setDepartments(response.data)
    } catch (error) {
      toast.error(error.response?.statusText)
    }
  }

  const departmentValues = departments.results?.results.map(department => ({
    text: department.room_type,
    value: department.id
  }))

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        'coupons',
        {
          coupon_code: data.couponCode,
          discount: parseFloat(data.discount),
          room_id: data.roomId || null,
          tour_id: data.tourId || null
        },
        {
          headers: {
            Authorization: `jwt ${window.sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      )

      toast.success(response.data?.message)
      closeModal()
    } catch (error) {
      toast.error(error.response?.statusText)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <article className="grid grid-cols-2 gap-4">
        <Input id="couponCode" label="Código de cupón" register={register} errors={errors} required={true} />
        <Input id="discount" label="Descuento asignado" register={register} errors={errors} required={true} />
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
        <Button
          text="Cancelar"
          background="bg-wite border border-gray-600"
          textColor="text-dark"
          onClick={closeModal}
        />
        <Button text="Guardar" type="submit" background="bg-orange" />
      </article>
    </form>
  )
}

export default EditCoupon
