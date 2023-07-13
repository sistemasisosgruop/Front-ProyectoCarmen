import Button from '@components/Button'
import Input from '@forms/Input'
import {
  type Control,
  type FieldErrors,
  type FieldValues,
  type UseFormHandleSubmit
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
        <div className='lg:col-span-1'>
          <Input
            name="tourName"
            label="Nombre del tour"
            register={control.register}
            required={true}
            errors={errors}
          />
        </div>

        <div className='lg:col-span-2'>
          <Input
            name="tourDescription"
            label="Descripción del tour"
            register={control.register}
            required={true}
            errors={errors}
          />
        </div>
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          name="extras"
          label="Extras"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="location"
          label="Ubicación"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="duration"
          label="Duración"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="difficulty"
          label="Dificultad"
          register={control.register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          name="languages"
          label="Idiomas"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="numOfPeople"
          label="Número de personas"
          register={control.register}
          required={true}
          errors={errors}
        />
        <Input
          name="numOfChildren"
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
