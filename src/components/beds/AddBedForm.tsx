import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import NumberPicker from '../NumberPicker'
import Button from '../Button'

const AddBedForm = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [numOfBathrooms, setNumOfBathrooms] = useState<number>(1)
  const [numOfBeds, setNumOfBeds] = useState<number>(1)
  const [numOfRooms, setNumOfRooms] = useState<number>(1)
  const { register, formState: { errors } } = useForm()

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <article className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='roomType'
          label='Tipo de habitación'
          extraClasses='lg:col-span-1'
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='overview'
          label='Descripción general'
          extraClasses='lg:col-span-2'
        />
      </article>

      <article className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='address'
          label='Dirección'
          extraClasses='col-span-1'
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='pricePerNight'
          label='Precio por noche'
          extraClasses='col-span-1'
        />

        <div className='flex flex-col justify-start items-start sm:col-span-2'>
          <label
            htmlFor='availableDate'
            className='text-gray-600 text-sm mb-1'
          >
            Fechas disponibles
          </label>
          <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => { setStartDate(date) }}
              className='w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue'
            />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => { setStartDate(date) }}
              className='w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue'
            />
          </div>
        </div>
      </article>

      {/* Number of beds */}
      <article className='w-full grid grid-cols-1 gap-4 sm:grid-cols-3'>
        <NumberPicker
          value={numOfBathrooms}
          onChangeValue={setNumOfBathrooms}
          label='Número de baños'
          htmlFor='numOfBathrooms'
        />

        <NumberPicker
          value={numOfBeds}
          onChangeValue={setNumOfBeds}
          label='Número de camas'
          htmlFor='numOfBeds'
        />

        <NumberPicker
          value={numOfRooms}
          onChangeValue={setNumOfRooms}
          label='Número de habitaciones'
          htmlFor='numOfRooms'
        />
      </article>

      <hr className='border-none w-full bg-gray-200 py-[0.5px] mx-8' />

      {/* Add images */}
      <article className='w-full'>
        <label
          htmlFor='images'
          className='text-gray-600 text-sm mb-2'
        >
          Agregar imágenes
        </label>
        <div>
          <Button
            text='Seleccionar imagen'
            background='bg-orange'
          />
          <span className='text-gray-400 text-sm'>
            *Se acepta un máximo de 10 archivos con un tamaño máximo de 10MB
          </span>
        </div>
      </article>

      {/* Description */}
      <article className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2'>
        <FormTextArea
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='included'
          label='Qué está incluido'
          extraClasses='lg:col-span-2 lg:row-span-2'
        />

        <FormTextArea
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='notIncluded'
          label='Qué no está incluido'
          extraClasses='lg:col-span-2 lg:row-span-2'
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='freeCancellation'
          label='Cancelación gratis'
          extraClasses='lg:col-span-1 lg:row-span-1'
        />

        <FormInput
          register={register}
          rules={{ required: true }}
          errors={errors}
          name='additionalCharge'
          label='Cobro adicional'
          extraClasses='lg:col-span-1 lg:row-span-1'
        />
      </article>

      {/* Button */}
      <div>
        <Button text='Agregar cama' background='bg-orange' />
      </div>
    </div>
  )
}

export default AddBedForm
