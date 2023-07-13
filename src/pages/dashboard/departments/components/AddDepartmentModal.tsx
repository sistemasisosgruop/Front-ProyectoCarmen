import { useState } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import Modal from '@components/Modal'
import Input from '@forms/Input'
import NumberPicker from '@components/forms/NumberPicker'
import { useCreateDepartment } from '@hooks/useCreateDepartment'
import InputAddText from '@components/forms/InputAddText'
import { BiDollar } from 'react-icons/bi'
import AddRoomForm from './AddRoomForm'
import { type DepartmentRoom } from 'types/department'

function AddDepartmentModal() {
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())
  const [numRooms, setNumRooms] = useState(1)
  const [numBeds, setNumBeds] = useState(1)
  const [numBathrooms, setNumBathrooms] = useState(1)
  const [included, setIncluded] = useState<string[]>([])
  const [notIncluded, setNotIncluded] = useState<string[]>([])
  const [extras, setExtras] = useState<string[]>([])
  const [services, setServices] = useState<string[]>([])
  const [departmentRooms, setDepartmentRooms] = useState<DepartmentRoom[]>([])
  const createDepartment = useCreateDepartment()
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FieldValues>()
  // const { onSubmit } = usePostRequest({ url: 'departments', modal: createDepartment })

  const onHandleSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = {
      ...data,
      checkIn,
      checkOut,
      numBathrooms,
      numBeds,
      numRooms: departmentRooms.length,
      extras,
      details: {
        amenities: included,
        notIncluded,
        services
      },
      departmentRooms
    }
    console.log({ formData })
    getValues('departmentRoom.typeRoom')
    // onSubmit(formData)
  }

  const bodyContent = (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <article className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className='lg:col-span-1'>
          <Input
            name="departmentType"
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

      <article className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className='lg:col-span-2'>
          <Input
            name="address"
            label="Dirección"
            register={register}
            required={true}
            errors={errors}
          />
        </div>

        <div className='lg:col-span-1'>
          <Input
            name="price"
            label="Precio por noche"
            register={register}
            required={true}
            errors={errors}
            showIcon
            icon={BiDollar}
          />
        </div>

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <DatePicker
                selected={checkIn}
                onChange={(date: Date) => setCheckIn(date)}
                showIcon
                className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
              />
            </div>
            <div>
              <DatePicker
                selected={checkOut}
                onChange={(date: Date) => setCheckOut(date)}
                className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Description */}
      <article className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor='included' className='text-gray-600 text-sm mb-1'>
            Que está incluido
          </label>
          <InputAddText
            name='details.amenities'
            placeholder='Ingresa lo que incluye'
            data={included}
            setData={setIncluded}
          />
        </div>

        <div>
          <label htmlFor='notIncluded' className='text-gray-600 text-sm mb-1'>
            Que no está incluido
          </label>
          <InputAddText
            name='details.notIncluded'
            placeholder='Ingresa lo que no incluye'
            data={notIncluded}
            setData={setNotIncluded}
          />
        </div>

        <div>
          <label htmlFor='services' className='text-gray-600 text-sm mb-1'>
            Servicios
          </label>
          <InputAddText
            name='details.services'
            placeholder='Ingresa los servicios'
            data={services}
            setData={setServices}
          />
        </div>

        <div>
          <label htmlFor='services' className='text-gray-600 text-sm mb-1'>
            Extras
          </label>
          <InputAddText
            name='extras'
            placeholder='Ingresa los extras'
            data={extras}
            setData={setExtras}
          />
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <span className='text-gray-600 mb-1 text-sm flex justify-start items-center gap-2'>
            Número de habitaciones
          </span>
          <NumberPicker
            value={numRooms}
            onChangeValue={setNumRooms}
          />
        </div>
        <div>
          <span className='text-gray-600 mb-1 text-sm flex justify-start items-center gap-2'>
            Número de camas
          </span>
          <NumberPicker
            value={numBeds}
            onChangeValue={setNumBeds}
          />
        </div>
        <div>
          <span className='text-gray-600 mb-1 text-sm flex justify-start items-center gap-2'>
            Número de baños
          </span>
          <NumberPicker
            value={numBathrooms}
            onChangeValue={setNumBathrooms}
          />
        </div>
      </article>

      {/* Room details */}
      <h4 className='w-full text-blue text-lg font-bold text-start mb-2 mt-4'>
        Detalles de cada habitación
      </h4>

      {numRooms >= 1 && [...Array(numRooms)].map((_, index) => (
        <div key={index}>
          <div className='w-full flex items-center'>
            <span className='whitespace-nowrap mr-4 text-blue text-md font-bold'>
              Habitación {index + 1}
            </span>
            <hr className="border-none w-full bg-gray-200 py-[0.5px]" />
          </div>
          <AddRoomForm
            register={register}
            errors={errors}
            setDepartmentRooms={setDepartmentRooms}
          />
        </div>
      ))}
    </form>
  )

  return (
    <Modal
      title="Crear departamento"
      actionLabel="Crear"
      isOpen={createDepartment.isOpen}
      disabled={false}
      onClose={createDepartment.onClose}
      onSubmit={handleSubmit(onHandleSubmit)}
      body={bodyContent}
    />
  )
}

export default AddDepartmentModal
