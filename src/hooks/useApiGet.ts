import { useEffect, useState } from 'react'
import axios from '@lib/axios'
// import { toast } from 'react-toastify'

interface ApiGetData {
  url: string
  pageNumber: number
}

export const useApiGet = ({ url, pageNumber = 1 }: ApiGetData) => {
  const [data, setData] = useState(null)
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
