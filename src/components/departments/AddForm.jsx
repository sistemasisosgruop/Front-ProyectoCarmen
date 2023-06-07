import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '@api/axios'
import DatePicker from 'react-datepicker'
import Input from '@forms/Input'
import Textarea from '@forms/Textarea'
import NumberPicker from '@forms/NumberPicker'
import Button from '@components/Button'
import UploadImages from './UploadImages'
import { toast } from 'react-toastify'

const AddForm = ({ closeModal, onNewRecord }) => {
  const [files, setFiles] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [numOfBathrooms, setNumOfBathrooms] = useState(1)
  const [numOfBeds, setNumOfBeds] = useState(1)
  const [numOfRooms, setNumOfRooms] = useState(1)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        'rooms',
        {
          room_type: data.roomType,
          description: data.description,
          address: data.address,
          price: data.price,
          check_in: '2023-05-15T00:00:00.000Z',
          check_out: '2023-05-15T00:00:00.000Z',
          num_bathrooms: numOfBathrooms,
          num_beds: numOfBeds,
          extras: ['uno', 'dos', 'tres'],
          details: {
            images_url: files,
            amenities: ['uno', 'dos', 'tres'],
            not_included: ['uno', 'dos', 'tres'],
            services: ['uno', 'dos', 'tres']
          },
          num_room: {
            type_room: 'Type room',
            num_bed: 1,
            type_bed: 'Type bed',
            type_bed_2: 'Type bed 2',
            images_url: files
          }
        },
        {
          headers: {
            Authorization: 'jwt ' + sessionStorage.getItem('token') || null,
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      toast.success(response.statusText)
      closeModal()
      reset()
      onNewRecord({
        room_type: data.roomType,
        description: data.description,
        address: data.address,
        price: data.price,
        check_in: '2023-05-15T00:00:00.000Z',
        check_out: '2023-05-15T00:00:00.000Z',
        num_bathrooms: numOfBathrooms,
        num_beds: numOfBeds,
        extras: ['uno', 'dos', 'tres']
      })
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input
          id="roomType"
          label="Tipo de habitación"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-1"
        />

        <Input
          id="description"
          label="Descripción general"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-2"
        />
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          id="address"
          label="Dirección"
          register={register}
          required={true}
          errors={errors}
          containerStyles="col-span-1"
        />

        <Input
          id="price"
          label="Precio por noche"
          register={register}
          required={true}
          errors={errors}
          containerStyles="col-span-1"
        />

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberPicker
          value={numOfBathrooms}
          onChangeValue={setNumOfBathrooms}
          label="Número de baños"
          htmlFor="numOfBathrooms"
        />

        <NumberPicker
          value={numOfBeds}
          onChangeValue={setNumOfBeds}
          label="Número de camas"
          htmlFor="numOfBeds"
        />

        <NumberPicker
          value={numOfRooms}
          onChangeValue={setNumOfRooms}
          label="Número de habitaciones"
          htmlFor="numOfRooms"
        />
      </article>

      <hr className="border-none w-full bg-gray-200 py-[0.5px] mx-8" />

      {/* Add images */}
      <UploadImages setFiles={setFiles} />

      {/* Description */}
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
        <Textarea
          id="included"
          label="Qué está incluido"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-2 lg:row-span-2"
        />

        <Textarea
          id="notIncluded"
          label="Qué no está incluido"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-2 lg:row-span-2"
        />

        <Input
          id="freeCancellation"
          label="Cancelación gratis"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-1 lg:row-span-1"
        />

        <Input
          id="additionalCharge"
          label="Cobro adicional"
          register={register}
          required={true}
          errors={errors}
          containerStyles="lg:col-span-1 lg:row-span-1"
        />
      </article>

      {/* Button */}
      <div>
        <Button text="Agregar cama" type="submit" background="bg-orange" />
      </div>
    </form>
  )
}

export default AddForm
