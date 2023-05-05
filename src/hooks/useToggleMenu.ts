import { useState } from 'react'

export const useToggleMenu = (): {
  isOpenMenu: boolean
  openMenu: () => void
  closeMenu: () => void
} => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const openMenu = (): void => {
    setIsOpenMenu(true)
  }

  const closeMenu = (): void => {
    setIsOpenMenu(false)
  }

  return { isOpenMenu, openMenu, closeMenu }
}

