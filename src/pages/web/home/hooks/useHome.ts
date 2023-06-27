import { useState } from 'react'

interface HomeStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export function useHome(): HomeStore {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return { isOpen, onOpen, onClose }
}
