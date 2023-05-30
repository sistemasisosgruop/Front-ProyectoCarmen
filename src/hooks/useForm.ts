import type { ChangeEvent } from 'react'
import { useState } from 'react'

type FormValues = Record<string, string>

type FormEvent = ChangeEvent<HTMLInputElement>

interface FormHook<T> {
  formData: T
  handleChange: (event: FormEvent) => void
  resetForm: () => void
}

export const useForm = <T extends FormValues>(initialState: T): FormHook<T> => {
  const [formData, setFormData] = useState<T>(initialState)

  const handleChange = (event: FormEvent): void => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const resetForm = (): void => {
    setFormData(initialState)
  }

  return { formData, handleChange, resetForm }
}
