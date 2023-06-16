import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Button from '@components/Button'
import MyFormInput from '@forms/FormInput'
import FormTextArea from '@forms/FormTextArea'
import UploadImages from '@components/UploadImages'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

interface Props {
  control: any
  errors: any
  handleSubmit: any
  setFiles: () => void
  onPrevStep: () => void
  onNextStep: () => void
}

function AddSecondForm({ control, errors, handleSubmit, setFiles, onPrevStep, onNextStep }: Props) {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <form onSubmit={handleSubmit(onNextStep)} className="w-full flex flex-col gap-4">
      {/* Add images */}
      <UploadImages setFiles={setFiles} />

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

      <article className="flex justify-between items-center gap-4">
        <Button
          text="Atrás"
          onClick={onPrevStep}
          background="bg-orange"
          showIcon={true}
          position="left"
          icon={<HiOutlineArrowSmLeft size={18} />}
        />

        <Button
          text="Siguiente"
          onClick={onNextStep}
          background="bg-orange"
          showIcon={true}
          icon={<HiOutlineArrowSmRight size={18} />}
        />
      </article>
    </form>
  )
}

export default AddSecondForm
