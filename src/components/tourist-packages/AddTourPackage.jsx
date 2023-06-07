import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import AddFirstForm from './AddFirstForm'
import AddSecondForm from './AddSecondForm'
import AddThirdForm from './AddThirdForm'
import { useApiGet } from '@hooks/useApiGet'
import axios from '@api/axios'

const SectionForm = ({ children }) => {
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

const AddTourPackage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = async data => {
    console.log(data)
    try {
      const response = await axios.post(
        'tours',
        {
          tour_name: 'Amazing Adventure Tour',
          tour_description:
            'Embark on an unforgettable adventure in the wilderness.',
          extras: 'Photography equipment, Snacks',
          location: 'Mountainous region',
          duration: '3 days',
          difficulty: 'Intermediate',
          languages: ['English', 'Spanish'],
          number_of_people: '10',
          ages: '18+',
          tour_info: {
            images_url: [
              'https://bucket.aws.photo4',
              'https://bucket.aws.photo3'
            ],
            what_to_do: 'Hiking, Camping, Wildlife spotting',
            good_choice_for: 'Nature lovers, Adventure enthusiasts',
            cancellation_policy:
              'Free cancellation up to 48 hours before the tour',
            price_per_person: 250.0,
            available_dates: ['2023-06-15', '2023-06-22', '2023-06-29'],
            schedule:
              'Day 1: Arrival and orientation, Day 2: Hiking to scenic viewpoints, Day 3: Wildlife safari'
          },
          tour_details: {
            what_is_included: 'Accommodation, Meals, Transportation',
            what_is_not_included: 'Personal expenses, Travel insurance',
            itinerary: [
              'Day 1: Arrival and orientation',
              'Day 2: Hiking to scenic viewpoints',
              'Day 3: Wildlife safari'
            ],
            departure_details: 'Meeting point: Visitor Center at 9:00 AM',
            return_details: 'Drop-off at Visitor Center at 5:00 PM',
            accessibility: 'Not suitable for individuals with mobility issues'
          }
        },
        {
          headers: {
            Authorization: `jwt ${window.sessionStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      console.log(response)
    } catch (error) {
      console.log()
    }
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
