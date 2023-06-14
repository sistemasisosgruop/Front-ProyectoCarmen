import { useEffect, useState } from 'react'

export const useFormatDay = dateToFormat => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    const formattedDate = new Date(dateToFormat).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    setDate(formattedDate)
  }, [dateToFormat])

  return { date }
}
