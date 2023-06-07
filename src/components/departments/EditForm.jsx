import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '@api/axios'
import DatePicker from 'react-datepicker'
import FormInput from '@forms/FormInput'
import FormTextArea from '@forms/FormTextArea'
import NumberPicker from '@forms/NumberPicker'
import Button from '@components/Button'
import UploadImages from './UploadImages'

const EditForm = ({ initialValue }) => {
  const [files, setFiles] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [numOfBathrooms, setNumOfBathrooms] = useState(1)
  const [numOfBeds, setNumOfBeds] = useState(1)
  const [numOfRooms, setNumOfRooms] = useState(1)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    setValue('roomType', initialValue.room_type)
    setValue('description', initialValue.description)
  }, [])

  console.log(initialValue)

  const onSubmit = async data => {
    try {
      const response = await axios.put(
        'rooms',
        {
          room_type: data.roomType,
          description: 'Description',
          address: 'Address',
          price: 120.0,
          check_in: '2023-05-15T00:00:00.000Z',
          check_out: '2023-05-15T00:00:00.000Z',
          num_bathrooms: 1,
          num_beds: 1,
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

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="roomType"
          label="Tipo de habitación"
          extraClasses="lg:col-span-1"
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="description"
          label="Descripción general"
          extraClasses="lg:col-span-2"
        />
      </article>

      {/* <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="address"
          label="Dirección"
          extraClasses="col-span-1"
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="price"
          label="Precio por noche"
          extraClasses="col-span-1"
        />

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate(date)
              }}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate(date)
              }}
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
*/}

      {/* Add images */}
      <UploadImages setFiles={setFiles} />

      {/* Description */}
      {/* <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
        <FormTextArea
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="included"
          label="Qué está incluido"
          extraClasses="lg:col-span-2 lg:row-span-2"
        />

        <FormTextArea
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="notIncluded"
          label="Qué no está incluido"
          extraClasses="lg:col-span-2 lg:row-span-2"
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="freeCancellation"
          label="Cancelación gratis"
          extraClasses="lg:col-span-1 lg:row-span-1"
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name="additionalCharge"
          label="Cobro adicional"
          extraClasses="lg:col-span-1 lg:row-span-1"
        />
      </article>
*/}

      {/* Button */}
      <div>
        <Button
          text="Editar departamento"
          type="submit"
          background="bg-orange"
        />
      </div>
    </form>
  )
}

export default EditForm
