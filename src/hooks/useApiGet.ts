import { useEffect, useState } from 'react'
import axios from '@lib/axios'
// import { toast } from 'react-toastify'

interface ApiGetData<T> {
  url: string
  pageNumber: number
}

export const useApiGet = <T>({ url, pageNumber = 1 }: ApiGetData<T>) => {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController = new AbortController()

    getData(abortController)

    return () => abortController.abort()
  }, [pageNumber])

  const getData = async (abortController: AbortController) => {
    try {
      const response = await axios.get(`${url}?page=${pageNumber}`, {
        signal: abortController.signal,
        headers: {
          Authorization: window.sessionStorage.getItem('token')
        }
      })
      setData(response.data)
    } catch (error) {
      console.log(error)
      // toast.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading }
}
