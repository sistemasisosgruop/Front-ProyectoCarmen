import Button from '../Button'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import { BiSave } from 'react-icons/bi'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

interface Props {
  control: any
  errors: any
  handleSubmit: any
  onPrevStep: () => void
  onSubmit: () => void
}

const AddThirdForm = ({ control, errors, handleSubmit, onPrevStep, onSubmit }: Props): JSX.Element => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <article className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <FormTextArea
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='included'
          label='Qué está incluido'
        />
        <FormTextArea
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='notIncluded'
          label='Qué no está incluido'
        />
      </article>

      <article className='grid grid-cols-1 gap-4'>
        <FormTextArea
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='itenerary'
          label='Itinerario: Día 01'
        />
      </article>

      <article className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='departureDetails'
          label='Detalles de salida'
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='returnDetails'
          label='Detalles de regreso'
        />
      </article>

      <article className='grid grid-cols-1 gap-4'>
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          name='accessibility'
          label='Accesibilidad'
        />
      </article>

      <article className='flex justify-between items-center gap-4'>
        <Button
          text='Atrás'
          onClick={onPrevStep}
          background='bg-orange'
          isIcon={true}
          position='left'
          icon={<HiOutlineArrowSmLeft size={18} />}
        />
        <button
          type='submit'
          className='w-full bg-orange rounded-xl text-white text-center font-bold flex justify-center items-center gap-2 px-6 py-2 hover:bg-opacity-90 sm:w-auto'
        >
          <span>Guardar</span>
          <BiSave size={18} />
        </button>
      </article>
    </form>
  )
}

export default AddThirdForm
