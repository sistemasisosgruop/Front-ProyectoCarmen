import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Button from '@components/Button'
import Input from '@forms/Input'
import Textarea from '@forms/Textarea'
import UploadImages from '@components/UploadImages'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import {
  type Control,
  type FieldErrors,
  type FieldValues,
  type UseFormHandleSubmit
} from 'react-hook-form'

interface Props {
  control: Control
  errors: FieldErrors
  handleSubmit: UseFormHandleSubmit<FieldValues>
  setFiles: (files: FileList) => void
  onPrevStep: () => void
  onNextStep: () => void
}

function AddSecondForm({
  control,
  errors,
  handleSubmit,
  setFiles,
  onPrevStep,
  onNextStep
}: Props) {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <form
      onSubmit={handleSubmit(onNextStep)}
      className="w-full flex flex-col gap-4"
    >
      {/* Add images */}
      <UploadImages setFiles={setFiles} />

      <article className="grid grid-cols-1 gap-4">
        <Textarea
          name="whatWillYouDo"
          label="Qué harás"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="goodChoice"
          label="Buena elección para"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="cancellationPolicy"
          label="Pólitica de cancelación"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          name="pricePerPerson"
          label="Precio por persona"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="schedule"
          label="Horario"
          register={control.register}
          required={true}
          errors={errors}
        />

        <div className="flex flex-col justify-start items-start sm:col-span-2">
          <label htmlFor="availableDate" className="text-gray-600 text-sm mb-1">
            Fechas disponibles
          </label>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
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

      <article className="flex justify-between items-center gap-4">
        <Button
          text="Atrás"
          onClick={onPrevStep}
          background="bg-orange"
          showIcon={true}
          position="left"
          icon={HiOutlineArrowSmLeft}
        />

        <Button
          text="Siguiente"
          onClick={onNextStep}
          background="bg-orange"
          showIcon={true}
          icon={HiOutlineArrowSmRight}
        />
      </article>
    </form>
  )
}

export default AddSecondForm
