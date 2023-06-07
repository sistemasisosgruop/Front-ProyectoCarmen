import { useEffect, useState } from 'react'
import axios from '@api/axios'

export const useApiGet = endPoint => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endPoint, {
          headers: {
            Authorization: `jwt ${window.sessionStorage.getItem('token')}`
          }
        })
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, setData, isLoading, error }
}
