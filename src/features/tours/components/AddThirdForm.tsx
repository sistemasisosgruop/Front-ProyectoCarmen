import Button from '@components/Button'
import Input from '@forms/Input'
import Textarea from '@forms/Textarea'
import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit
} from 'react-hook-form'
import { BiSave } from 'react-icons/bi'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

interface Props {
  control: Control
  errors: FieldErrors<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onPrevStep: () => void
  onSubmit: SubmitHandler<FieldValues>
}

function AddThirdForm({
  control,
  errors,
  handleSubmit,
  onPrevStep,
  onSubmit
}: Props) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Textarea
          id="included"
          label="Qué está incluido"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Textarea
          id="notIncluded"
          label="Qué no está incluido"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4">
        <Textarea
          id="itenerary"
          label="Itinerario: Día 01"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          id="departureDetails"
          label="Detalles de salida"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="returnDetails"
          label="Detalles de regreso"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4">
        <Input
          id="accessibility"
          label="Accesibilidad"
          register={control.register}
          required={true}
          errors={errors}
        />
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
        <button
          type="submit"
          className="w-full bg-orange rounded-xl text-white text-center font-bold flex justify-center items-center gap-2 px-6 py-2 hover:bg-opacity-90 sm:w-auto"
        >
          <span>Guardar</span>
          <BiSave size={18} />
        </button>
      </article>
    </form>
  )
}

export default AddThirdForm
