import Button from '@components/Button'
import Input from '@forms/Input'
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit
} from 'react-hook-form'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

interface Props {
  control: Control
  errors: FieldErrors
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onNextStep: () => void
}

function AddFirstForm({ control, errors, handleSubmit, onNextStep }: Props) {
  return (
    <form
      onSubmit={handleSubmit(onNextStep)}
      className="w-full flex flex-col gap-4"
    >
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input
          id="tourName"
          label="Nombre del tour"
          register={control.register}
          required={true}
          errors={errors}
          extraClasses="lg:col-span-1"
        />
        <Input
          id="tourDescription"
          label="Descripción del tour"
          register={control.register}
          required={true}
          errors={errors}
          extraClasses="lg:col-span-2"
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          id="extras"
          label="Extras"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="location"
          label="Ubicación"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="duration"
          label="Duración"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="difficulty"
          label="Dificultad"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          id="languages"
          label="Idiomas"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="numOfPeople"
          label="Número de personas"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          id="numOfChildren"
          label="Número de niños"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="w-full flex justify-center items-center sm:w-auto">
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

export default AddFirstForm
