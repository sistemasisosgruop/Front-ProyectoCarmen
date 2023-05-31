import { useState } from 'react'

export const useToggleSidebar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  const openSidebar = () => {
    setIsShowSidebar(true)
  }

  const closeSidebar = () => {
    setIsShowSidebar(false)
  }

  return { isShowSidebar, openSidebar, closeSidebar }
}
