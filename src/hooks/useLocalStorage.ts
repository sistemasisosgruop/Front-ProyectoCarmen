import { useState } from 'react'

interface HookData extends Array<string | ((value: string) => void)> {
  0: string
  1: (value: string) => void
}

export const useLocalStorage = (
  key: string,
  initialValue: string
): HookData => {
  const [valueSave, setValueSave] = useState<string>(() => {
    try {
      const item: string | null = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: string): void => {
    try {
      setValueSave(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [valueSave, setValue]
}
