import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Button from '@components/Button'
import MyFormInput from '@forms/FormInput'
import FormTextArea from '@forms/FormTextArea'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

interface Props {
  control: any
  errors: any
  handleSubmit: any
  onPrevStep: () => void
  onNextStep: () => void
}

const AddSecondForm = ({
  control,
  errors,
  handleSubmit,
  onPrevStep,
  onNextStep
}: Props): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <form
      onSubmit={handleSubmit(onNextStep)}
      className="w-full flex flex-col gap-4"
    >
      {/* Add images */}
      <article className="w-full">
        <label htmlFor="images" className="text-gray-600 text-sm mb-2">
          Agregar imágenes
        </label>
        <div>
          <Button text="Seleccionar imagen" background="bg-orange" />
          <span className="text-gray-400 text-sm">
            *Se acepta un máximo de 10 archivos con un tamaño máximo de 10MB
          </span>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-4">
        <FormTextArea
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name="whatWillYouDo"
          label="Qué harás"
        />
        <MyFormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name="goodChoice"
          label="Buena elección para"
        />
        <MyFormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name="cancellationPolicy"
          label="Pólitica de cancelación"
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MyFormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name="pricePerPerson"
          label="Precio por persona"
        />
        <MyFormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name="schedule"
          label="Horario"
        />

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => {
                setStartDate(date)
              }}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => {
                setStartDate(date)
              }}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
        </div>
      </article>

      <article className="flex justify-between items-center gap-4">
        <Button
          text="Atrás"
          onClick={onPrevStep}
          background="bg-orange"
          isIcon={true}
          position="left"
          icon={<HiOutlineArrowSmLeft size={18} />}
        />

        <Button
          text="Siguiente"
          onClick={onNextStep}
          background="bg-orange"
          isIcon={true}
          icon={<HiOutlineArrowSmRight size={18} />}
        />
      </article>
    </form>
  )
}

export default AddSecondForm
