import { useState } from 'react'

export const useForm = initialState => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const resetForm = () => {
    setFormData(initialState)
  }

  return { formData, handleChange, resetForm }
}
