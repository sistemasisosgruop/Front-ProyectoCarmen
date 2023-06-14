import { useEffect, useState } from 'react'
import axios from '@api/axios'
import { toast } from 'react-toastify'

export const useApiGet = ({ url, pageNumber = 1 }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()

    getData(abortController)

    return () => abortController.abort()
  }, [pageNumber])

  const getData = async abortController => {
    try {
      const response = await axios.get(`${url}?page=${pageNumber}`, {
        signal: abortController.signal,
        headers: {
          Authorization: `jwt ${window.sessionStorage.getItem('token')}`
        }
      })
      setData(response.data)
    } catch (error) {
      console.log(error)
      toast.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading }
}
