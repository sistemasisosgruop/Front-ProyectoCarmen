import { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import Input from '@forms/Input'
import Autocomplete from '@forms/Autocomplete'
import Button from '@components/Button'
import { toast } from 'react-toastify'
import { DepartmentResponse } from 'types/department'
import { API_URL } from '@utils/consts'

function AddCoupon() {
  const [departmentsResponse, setDepartmentsResponse] = useState<DepartmentResponse>(
    {} as DepartmentResponse
  )
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    getDepartments()
  }, [])

  const getDepartments = async () => {
    await axios
      .get(`${API_URL}/rooms`, {
        headers: {
          Authorization: window.sessionStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response.data)
        setDepartmentsResponse(response.data)
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          console.log(error)
          toast.error(error.response?.statusText)
        }
      })
  }

  const departmentValues = departmentsResponse.results.map(department => ({
    text: department.roomType,
    value: department.id
  }))

  const onSubmit: SubmitHandler<FieldValues> = async data => {
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
        <Input
          id="couponCode"
          label="Código de cupón"
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          id="discount"
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

export default AddCoupon
