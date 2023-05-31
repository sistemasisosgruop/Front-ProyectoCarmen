import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [valueSave, setValueSave] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setValueSave(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [valueSave, setValue]
}
