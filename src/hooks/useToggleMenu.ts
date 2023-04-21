import { useState } from 'react'

export const useToggleMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const openMenu = (): void => {
    setIsOpenMenu(true)
  }

  const closeMenu = (): void => {
    setIsOpenMenu(false)
  }

  return { isOpenMenu, openMenu, closeMenu }
}

