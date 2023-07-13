import { type ModalStore } from 'types/modalStore'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL, KeyStorage } from '@utils/consts'

interface UseGetStore<T> {
  data: T
  isLoading: boolean
}

interface UseGetParamenters {
  url: string
  pageNumber?: number
  modal?: ModalStore
}

export const useGetRequest = <T>({
  url,
  pageNumber = 1,
  modal
}: UseGetParamenters): UseGetStore<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController = new AbortController()

    getData(abortController)

    return () => abortController.abort()
  }, [pageNumber, modal?.isOpen])

  const getData = async (abortController: AbortController) => {
    try {
      const { data } = await axios.get(`${API_URL}/${url}?page=${pageNumber}`, {
        signal: abortController.signal,
        headers: {
          Authorization: window.localStorage.getItem(KeyStorage.JWT_TOKEN),
          'Content-Type': 'application/json'
        }
      })

      setData(data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`An error has ocurred: ${error.message}`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading }
}
