import { useState } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { useCreateTours } from '../hooks/useCreateTours'
import Modal from '@components/Modal'
import AddFirstForm from './AddFirstForm'
import AddSecondForm from './AddSecondForm'
import AddThirdForm from './AddThirdForm'

function AddTourModal() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [files, setFiles] = useState<FileList | null>(null)
  const modal = useCreateTours()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>()

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log({ ...data, files })
  }

  const bodyContent = (
    <div>
      {currentStep === 1 && (
        <AddFirstForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onNextStep={onNextStep}
        />
      )}

      {currentStep === 2 && (
        <AddSecondForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          setFiles={setFiles}
          onPrevStep={onPrevStep}
          onNextStep={onNextStep}
        />
      )}

      {currentStep === 3 && (
        <AddThirdForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onPrevStep={onPrevStep}
          onSubmit={onSubmit}
        />
      )}
    </div>
  )

  return (
    <Modal
      title='Crea paquete turístico'
      actionLabel='Crear'
      secondaryActionLabel='Atrás'
      secondaryAction={() => console.log('Secondary action')}
      disabled={false}
      isOpen={modal.isOpen}
      onClose={modal.onClose}
      onSubmit={() => console.log('Tour created')}
      body={bodyContent}
    />
  )
}

export default AddTourModal
