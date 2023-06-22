import { useState } from 'react'

export const useToggleMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = () => {
    setIsOpenMenu(true)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return { isOpenMenu, openMenu, closeMenu }
}
