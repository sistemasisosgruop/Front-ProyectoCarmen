import axios from 'axios'
import { type FieldValues, type SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { API_URL, KeyStorage } from '@utils/consts'
import { useState } from 'react'
import { type ModalStore } from 'types/modalStore'

interface UsePostStore {
  onSubmit: SubmitHandler<FieldValues>
  success: boolean
}

interface UsePostParameters {
  url: string
  modal?: ModalStore
  successMessage?: string
}

export const usePostRequest = ({ url, modal, successMessage }: UsePostParameters): UsePostStore => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await axios.post(
        `${API_URL}/${url}`,
        data,
        {
          headers: {
            Authorization: window.localStorage.getItem(KeyStorage.JWT_TOKEN),
            'Content-Type': 'application/json'
          }
        }
      )

      if (successMessage) {
        toast.success(successMessage)
      }
      modal?.onClose()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      }
    } finally {
      setIsSuccess(true)
    }
  }

  return { onSubmit, success: isSuccess }
}
