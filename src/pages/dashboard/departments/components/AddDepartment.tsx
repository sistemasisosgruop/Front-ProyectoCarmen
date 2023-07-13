import { useState } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import Input from '@forms/Input'
import Textarea from '@forms/Textarea'
import NumberPicker from '@forms/NumberPicker'
import Button from '@components/Button'
// import UploadImages from './UploadImages'
import { toast } from 'react-toastify'
import { API_URL } from '@utils/consts'

interface Props {
  onClose: () => void
}

function AddDepartment({ onClose }: Props) {
  // const [files, setFiles] = useState()
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [numOfBathrooms, setNumOfBathrooms] = useState<number>(1)
  const [numOfBeds, setNumOfBeds] = useState<number>(1)
  const [numOfRooms, setNumOfRooms] = useState<number>(1)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    await axios
      .post(
        `${API_URL}/rooms`,
        {
          room_type: data.roomType,
          description: data.description,
          address: data.address,
          price: data.price,
          check_in: '2023-05-15T00:00:00.000Z',
          check_out: '2023-05-20T00:00:00.000Z',
          num_bathrooms: numOfBathrooms,
          num_beds: numOfBeds,
          extras: ['Breakfast included', 'Free Wi-Fi', 'Gym access'],
          details: {
            amenities: ['Swimming pool', 'Restaurant', 'Room service'],
            not_included: ['Pets not allowed', 'Smoking not allowed'],
            services: ['27/7 concierge', 'Laundry service']
          },
          num_room: {
            type_room: data.roomType,
            num_bed: numOfBeds,
            type_bed: 'King Bed 8',
            type_bed_2: 'Sofa Bed 8'
          }
        },
        {
          headers: {
            Authorization: window.sessionStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        toast.success(response.statusText)
        onClose()
        reset()
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          console.log(error)
          toast.error(error.response?.data?.message)
        }
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className='lg:col-span-1'>

          <Input
            name="roomType"
            label="Tipo de habitación"
            register={register}
            required={true}
            errors={errors}
          />
        </div>

        <div className='lg:col-span-2'>

          <Input
            name="description"
            label="Descripción general"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className='col-span-1'>
          <Input
            name="address"
            label="Dirección"
            register={register}
            required={true}
            errors={errors}
          />
        </div>

        <div className='col-span-1'>
          <Input
            name="price"
            label="Precio por noche"
            register={register}
            required={true}
            errors={errors}
          />
        </div>

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              showIcon
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberPicker
          value={numOfBathrooms}
          onChangeValue={setNumOfBathrooms}
        />

        <NumberPicker
          value={numOfBeds}
          onChangeValue={setNumOfBeds}
        />

        <NumberPicker
          value={numOfRooms}
          onChangeValue={setNumOfRooms}
        />
      </article>

      <hr className="border-none w-full bg-gray-200 py-[0.5px] mx-8" />

      {/* Add images */}
      {/* <UploadImages setFiles={setFiles} /> */}

      {/* Description */}
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
        <Textarea
          name="included"
          label="Qué está incluido"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-2 lg:row-span-2"
        />

        <Textarea
          name="notIncluded"
          label="Qué no está incluido"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-2 lg:row-span-2"
        />

        <div className='lg:col-span-1 lg:row-span-1'>
          <Input
            name="freeCancellation"
            label="Cancelación gratis"
            register={register}
            required={true}
            errors={errors}
          />
        </div>

        <div className='lg:col-span-1 lg:row-span-1'>
          <Input
            name="additionalCharge"
            label="Cobro adicional"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
      </article>

      {/* Button */}
      <div>
        <Button text="Agregar cama" type="submit" background="bg-orange" />
      </div>
    </form>
  )
}

export default AddDepartment
