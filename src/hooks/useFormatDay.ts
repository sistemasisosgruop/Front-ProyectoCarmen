import { useEffect, useState } from 'react'

export const useFormatDay = (dateToFormat: Date) => {
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    const formattedDate: string = new Date(dateToFormat).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    setDate(formattedDate)
  }, [dateToFormat])

  return { date }
}
