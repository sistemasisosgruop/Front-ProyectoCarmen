import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import AddFirstForm from './AddFirstForm'
import AddSecondForm from './AddSecondForm'
import AddThirdForm from './AddThirdForm'

interface SectionFormProps {
  children: JSX.Element
}

const SectionForm = ({ children }: SectionFormProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, z: -25, x: 50 }}
      animate={{ opacity: 1, z: 0, x: 0 }}
      transition={{ duration: 0.7, type: 'easeInOut' }}
      exit={{ opacity: 0, z: -25, x: -50 }}
    >
      {children}
    </motion.div>
  )
}

const AddTourPackage = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onNextStep = (): void => {
    setCurrentStep(currentStep + 1)
  }

  const onPrevStep = (): void => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = (data: FormData): void => {
    console.log(data)
  }

  return (
    <div>
      {currentStep === 1 && (
        <SectionForm>
          <AddFirstForm
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onNextStep={onNextStep}
          />
        </SectionForm>
      )}

      {currentStep === 2 && (
        <SectionForm>
          <AddSecondForm
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onPrevStep={onPrevStep}
            onNextStep={onNextStep}
          />
        </SectionForm>
      )}

      {currentStep === 3 && (
        <SectionForm>
          <AddThirdForm
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onPrevStep={onPrevStep}
            onSubmit={onSubmit}
          />
        </SectionForm>
      )}
    </div>
  )
}

export default AddTourPackage
