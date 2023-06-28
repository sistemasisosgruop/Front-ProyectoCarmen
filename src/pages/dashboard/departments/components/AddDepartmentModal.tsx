import DatePicker from 'react-datepicker'
import Modal from '@components/Modal'
import Input from '@components/forms/Input'
import { UseModalStore } from '@hooks/useModal'
import { API_URL } from '@utils/consts'
import axios from 'axios'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Textarea from '@components/forms/Textarea'
import NumberPicker from '@components/forms/NumberPicker'

interface Props {
  createModal: UseModalStore
}

function AddDepartmentModal({ createModal }: Props) {
  const [startDateCheckIn, setStartDateCheckIn] = useState<Date>(new Date())
  const [startDateCheckOut, setStartDateCheckOut] = useState<Date>(new Date())
  const [numBathrooms, setNumBathrooms] = useState<number>(1)
  const [numBeds, setNumBeds] = useState<number>(1)
  const [numRooms, setNumRooms] = useState<number>(1)
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
          check_in: startDateCheckIn,
          check_out: startDateCheckOut,
          num_bathrooms: numBathrooms,
          num_beds: numBeds,
          extras: ['Breakfast included', 'Free Wi-Fi', 'Gym access'],
          details: {
            amenities: ['Swimming pool', 'Restaurant', 'Room service'],
            not_included: ['Pets not allowed', 'Smoking not allowed'],
            services: ['27/7 concierge', 'Laundry service']
          },
          num_room: {
            type_room: data.roomType,
            num_bed: numBeds,
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
        createModal.onClose()
        reset()
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          console.log(error)
          toast.error(error.response?.data?.message)
        }
      })
  }

  const bodyContent = (
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
              selected={startDateCheckIn}
              onChange={(date: Date) => setStartDateCheckIn(date)}
              showIcon
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
            <DatePicker
              selected={startDateCheckOut}
              onChange={(date: Date) => setStartDateCheckOut(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberPicker
          value={numBathrooms}
          onChangeValue={setNumBathrooms}
          label="Número de baños"
          name="numOfBathrooms"
        />

        <NumberPicker
          value={numBeds}
          onChangeValue={setNumBeds}
          label="Número de camas"
          name="numOfBeds"
        />

        <NumberPicker
          value={numRooms}
          onChangeValue={setNumRooms}
          label="Número de habitaciones"
          name="numOfRooms"
        />
      </article>

      <hr className="border-none w-full bg-gray-200 py-[0.5px] mx-8" />

      {/* Add images */}
      {/* <UploadImages setFiles={setFiles} /> */}

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
    </form>
  )

  return (
    <Modal
      title="Crear departamento"
      actionLabel="Crear"
      isOpen={createModal.isOpen}
      disabled={false}
      onClose={createModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default AddDepartmentModal
