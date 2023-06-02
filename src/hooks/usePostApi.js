import { useEffect, useState } from 'react'
import axios from '@api/axios'

export const usePostApi = (endPoint, data) => {
  const [dataResponse, setDataResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(endPoint, data)
        setDataResponse(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { dataResponse, isLoading, error }
}
