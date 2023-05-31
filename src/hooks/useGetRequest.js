import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetRequest = url => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data.data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData().catch(e => {
      console.log(e)
    })
  }, [url])

  return [data, isLoading, error]
}
